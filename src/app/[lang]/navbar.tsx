import styles from './navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import { Locale } from '@/i18n-config';

export default async function NavBar({
  locale,
}: Readonly<{
  locale: Locale;
}>) {
  return (
    <div className={styles.navbar}>
      <Link className={styles.navTitle} href={`/${locale}`}>
        CentenoDev
      </Link>

      <ul>
        <li>
          <Link href={`${locale}/projects`}>
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
