import { Poppins } from 'next/font/google';
import './_styles/layout.scss';
import { siteConfig } from './_config/siteConfig';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: 'UI/UX design, web developer, react developer, programmer - Krzysiek Wandachowicz',
  description: 'Check out my portfolio and experience in design and programming.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.lang,
    url: siteConfig.domain,
    title: 'UI/UX design, web developer, react developer, programmer - Krzysiek Wandachowicz',
    description: 'Check out my portfolio and experience in design and programming.',
    images: [
      {
        url: `${siteConfig.domain}/img/ogImage/wandachowicz.webp`,
        width: 1600,
        height: 900,
        alt: 'UI/UX design, web developer, react developer, programmer - Krzysiek Wandachowicz',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang={siteConfig.lang} className={poppins.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
