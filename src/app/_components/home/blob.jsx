"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "./heroSection.module.scss";

export const Blob = () => {
  const mountRef = useRef(null);
  let animationFrameId = null; // ID animacji do kontrolowania

  useEffect(() => {
    const mount = mountRef.current;
    
    // **Scena, kamera i renderer**
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 100);
    
    // **Funkcja aktualizująca pozycję kamery w zależności od szerokości ekranu**
    const updateCameraPosition = () => {
      const width = window.innerWidth;
      
      if (width < 768) {
        camera.position.set(0, 0, 5.5);  // Mobilne ułożenie
      } else if (width < 1200) {
        camera.position.set(-1, 0, 4.8); // Tablety
      } else {
        camera.position.set(-1.5, 0, 4.3); // Desktop
      }
    };
    updateCameraPosition();

    // **Renderer z optymalizacją**
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Ograniczamy retina displays
    mount.appendChild(renderer.domElement);

    // **Światło**
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
    scene.add(ambientLight);

    // **Optymalizowana geometria bloba**
    const geometry = new THREE.SphereGeometry(1, 48, 48); // Pośrednia liczba wierzchołków dla lepszego wyglądu

    const shaderMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        uniform float opacity;
        varying vec2 vUv;
        void main() {
          gl_FragColor = vec4(color * vUv.x, opacity);
        }
      `,
      uniforms: {
        color: { value: new THREE.Color(0xefefef) },
        opacity: { value: 0.1 }
      },
      transparent: true,
    });

    const blob = new THREE.Mesh(geometry, shaderMaterial);
    scene.add(blob);

    let lastTime = 0;
    let timeOffset = Math.random() * 1000; // Każdy blob ma inny start animacji

    const animate = (time) => {
      animationFrameId = requestAnimationFrame(animate);
      let deltaTime = time - lastTime;
      lastTime = time;

      // **Płynniejsza i bardziej kontrolowana animacja**
      blob.rotation.z += 0.000005 * deltaTime;
      blob.scale.x = 3 + 0.05 * Math.sin((time + timeOffset) * 0.002);
      blob.scale.y = 2.49 + 0.05 * Math.cos((time + timeOffset) * 0.001);

      renderer.render(scene, camera);
    };

    animate(0);

    // **Optymalizacja resize**
    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);

      updateCameraPosition(); // **Aktualizujemy pozycję kamery na resize**
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      mount.removeChild(renderer.domElement);
      scene.remove(blob);
      geometry.dispose();
      shaderMaterial.dispose();
      renderer.dispose();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div className={styles.blob} ref={mountRef} style={{ width: "100%", height: "100%" }} />;
};
