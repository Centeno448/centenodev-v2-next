import Link from 'next/link';
import styles from './not-found.module.scss';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>404 - Not Found</h2>
      <div className={styles.ctas}>
        <Link className={styles.primary} href="/">
          Return Home
        </Link>
      </div>
    </div>
  );
}
