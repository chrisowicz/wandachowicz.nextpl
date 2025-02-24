"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "./heroSection.module.scss";

export default function BlobVideo() {
  const mountRef = useRef(null);
  let animationFrameId = null;

  // Możesz tu ustawić swoje wartości – w dowolnym momencie zmodyfikować lub pobierać z propsów.
  const grainAmount = 0.8;   // 0.0 - brak ziarna, 1.0 - bardzo mocne
  const videoOpacity = 0.4;  // Przezroczystość wideo (0 - niewidoczne, 1 - pełna nieprzezroczystość)
  const videoScale = 1;    // Im mniejsza wartość (<1), tym szerszy „kadr” wideo jest widoczny
  const offsetX = -0.15;       // Przesunięcie poziome w screen-space
  const offsetY = 0.0;       // Przesunięcie pionowe w screen-space

  useEffect(() => {
    if (!mountRef.current) return;
    const mount = mountRef.current;

    // 1) Tworzymy <video>
    const video = document.createElement("video");
    video.src = "/img/videoDesktop.mp4"; // Ustaw ścieżkę do swojego wideo
    video.loop = true;
    video.muted = true;
    video.autoplay = true;
    video.playsInline = true;
    video.style.display = "none";
    document.body.appendChild(video);

    video.addEventListener("canplaythrough", () => {
      video.play().catch(() => console.warn("Autoplay blocked"));
    });

    // 2) Scena i kamera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );

    // Ustawienie pozycji kamery w zależności od szerokości (możesz dopasować)
    const updateCameraPosition = () => {
      const width = window.innerWidth;
      if (width < 768) {
        camera.position.set(0, 0, 5.5);
      } else if (width < 1200) {
        camera.position.set(-1, 0, 4.8);
      } else {
        camera.position.set(-1.5, 0, 4.3);
      }
    };
    updateCameraPosition();

    // 3) Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    mount.appendChild(renderer.domElement);

    // 4) Światło
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
    scene.add(ambientLight);

    // 5) Tekstura wideo
    const videoTexture = new THREE.VideoTexture(video);
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;

    // 6) Geometria (sfera) + ShaderMaterial
    const geometry = new THREE.SphereGeometry(1, 48, 48);

    // Definiujemy funkcję random() w GLSL do ziarna
    const randomFunctionGLSL = `
      float random2D(vec2 st) {
        // Klasyczny hash / rand
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }
    `;

    const blobMaterial = new THREE.ShaderMaterial({
      uniforms: {
        videoTexture: { value: videoTexture },
        uOpacity: { value: videoOpacity },
        uGrainAmount: { value: grainAmount },
        uScale: { value: videoScale },
        uOffset: { value: new THREE.Vector2(offsetX, offsetY) },
        uTime: { value: 0.0 }, // Do animowania ziarna w czasie
      },
      vertexShader: `
        // Przekazujemy do FS screen-space UV (vScreenUv)
        varying vec2 vScreenUv;

        uniform float uScale;
        uniform vec2 uOffset;

        void main() {
          // Standardowa transformacja do clip space
          vec4 clipPos = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

          // Normalized Device Coordinates (NDC) = clipPos.xyz / clipPos.w, zakres [-1..1]
          vec2 ndc = clipPos.xy / clipPos.w;

          // Przejście na [0..1]
          vec2 screenUv = ndc * 0.5 + 0.5;

          // Skalowanie i przesunięcie (aby wideo było bliżej środka lub bardziej „oddalone”)
          // Im mniejszy uScale (<1), tym wideo wydaje się "oddalone" (widać większy fragment).
          screenUv = (screenUv - 0.5) * uScale + 0.5 + uOffset;

          vScreenUv = screenUv;
          gl_Position = clipPos;
        }
      `,
      fragmentShader: `
        uniform sampler2D videoTexture;
        uniform float uOpacity;
        uniform float uGrainAmount;
        uniform float uTime;

        varying vec2 vScreenUv;

        ${randomFunctionGLSL}

        void main() {
          // Odczyt wideo w screen space
          vec4 color = texture2D(videoTexture, vScreenUv);

          // Prostą metodą "maski" jest faktycznie pokazywanie tylko tam,
          // gdzie sfera jest widoczna (czyli tam, gdzie geometry jest).
          // Nie stosujemy distance() bo geometry 3D i tak tworzy kształt.

          // Dodajemy ziarno
          // Losowość na podstawie vScreenUv i uTime (by "migotało")
          float n = random2D(vScreenUv + uTime);
          // "Mieszamy" kolor z noise
          // Zamiast +, można zrobić np. color.rgb = mix( color.rgb, vec3(n), 0.05 * uGrainAmount );
          // Poniższy przykład dodaje szum +/- wokół oryginalnych wartości
          color.rgb += (n - 0.5) * 0.2 * uGrainAmount;

          // Ustawiamy przezroczystość
          color.a *= uOpacity;

          gl_FragColor = color;
        }
      `,
      transparent: true,
    });

    const blob = new THREE.Mesh(geometry, blobMaterial);
    scene.add(blob);

    // 7) Animacja
    let lastTime = 0;
    let timeOffset = Math.random() * 1000;

    const animate = (time) => {
      animationFrameId = requestAnimationFrame(animate);
      const deltaTime = time - lastTime;
      lastTime = time;

      // Obrót i skalowanie -> "blob" w 3D
      blob.rotation.z += 0.000005 * deltaTime;
      blob.scale.x = 3 + 0.05 * Math.sin((time + timeOffset) * 0.002);
      blob.scale.y = 2.49 + 0.05 * Math.cos((time + timeOffset) * 0.001);

      // Aktualizujemy uTime dla animacji ziarna
      blobMaterial.uniforms.uTime.value = time * 0.001;

      renderer.render(scene, camera);
    };
    animate(0);

    // 8) Resize
    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      updateCameraPosition();
    };

    window.addEventListener("resize", handleResize);

    // 9) Sprzątanie
    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      mount.removeChild(renderer.domElement);
      scene.remove(blob);
      geometry.dispose();
      blobMaterial.dispose();
      videoTexture.dispose();
      renderer.dispose();
      document.body.removeChild(video);
      window.removeEventListener("resize", handleResize);
    };
  }, [
    grainAmount,
    videoOpacity,
    videoScale,
    offsetX,
    offsetY
  ]);

  return (
    <div
      ref={mountRef}
      className={styles.blob}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
