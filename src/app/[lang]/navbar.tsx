'use client';
import styles from './navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import { Locale } from '@/i18n-config';
import { usePathname, useRouter } from 'next/navigation';

export default function NavBar({
  locale,
}: Readonly<{
  locale: Locale;
}>) {
  const router = useRouter();
  const path = usePathname();

  const localeChanged = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const segments = path.split('/');
    segments[1] = event.target.value;
    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <div className={styles.navbar}>
      <Link className={styles.navTitle} href={`/${locale}`}>
        CentenoDev
      </Link>

      <ul>
        <li>
          <select
            onChange={localeChanged}
            className={styles.localeSelect}
            value={locale}
            name="locale"
            id="locale"
          >
            <option value="en">EN</option>
            <option value="es">ES</option>
          </select>
        </li>
        <li>
          <Link href={`/${locale}/projects`}>
            {locale == 'en' ? 'Projects' : 'Proyectos'}
          </Link>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/diego-andres-centeno/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.socialLogo}
              src="/linked-in.svg"
              alt="LinkedIn logo"
              width={23}
              height={23}
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Centeno448/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.socialLogo}
              src="/github-mark.svg"
              alt="Github logo"
              width={23}
              height={23}
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
