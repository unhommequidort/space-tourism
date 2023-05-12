import Image from 'next/image';
import PrimaryNavigation from '@/app/components/PrimaryNavigation/PrimaryNavigation';
import '@/app/globals.css';
import { ff_sans_normal } from './style/fonts';
import Link from 'next/link';

export const metadata = {
  title: 'Space Tourism',
  description: 'Space Tourism',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`home ${ff_sans_normal.className}`}>
        <a className="skip-to-content" href="#main">
          Skip to content
        </a>
        <header className="primary-header flex">
          {/* <div> */}
          <Image
            src="/assets/shared/logo.svg"
            alt="space tourism logo"
            width={100}
            height={100}
            className="logo"
          />
          {/* </div> */}
          <PrimaryNavigation />
        </header>
        {children}
      </body>
    </html>
  );
}
