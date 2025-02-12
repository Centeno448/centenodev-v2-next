import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.scss';
import styles from './layout.module.scss';
import NavBar from './navbar';

import { i18n, type Locale } from '../../i18n-config';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Centeno Dev',
  description: 'Developer portfolio site - Diego Centeno',
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}>) {
  const locale = (await params).lang;
  return (
    <html lang={locale}>
      <body className={`${geistSans.variable}`}>
        <div className={styles.page}>
          <NavBar locale={locale} />
          {children}
        </div>
      </body>
    </html>
  );
}
