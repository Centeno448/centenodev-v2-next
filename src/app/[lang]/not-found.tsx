'use client';

import Link from 'next/link';
import styles from './not-found.module.scss';
import { usePathname } from 'next/navigation';
import { getLocaleByPath } from '@/utils';

export default function NotFound() {
  const path = usePathname();
  const locale = getLocaleByPath(path);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>404 - Not Found</h2>
      <div className={styles.ctas}>
        <Link className={styles.primary} href={`/${locale}`}>
          {locale == 'en' ? 'Return Home' : 'Regresar'}
        </Link>
      </div>
    </div>
  );
}
