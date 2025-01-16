import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.scss';
import styles from './layout.module.scss';
import NavBar from './navbar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Centeno Dev',
  description: 'Developer portfolio site - Diego Centeno',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable}`}>
        <div className={styles.page}>
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
