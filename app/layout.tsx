import './globals.css';
import { ff_sans_normal } from './style/fonts';

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
      <body className={`${ff_sans_normal.className}`}>{children}</body>
    </html>
  );
}
