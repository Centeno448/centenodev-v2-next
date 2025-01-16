import styles from './project.module.scss';
import Link from 'next/link';

type ProjectProps = {
  name: string;
  summary: string;
  slug: string;
};

export default function Project(props: ProjectProps) {
  return (
    <Link className={styles.projectLink} href={`projects/${props.slug}`}>
      <div className={styles.card}>
        <p className={styles.name}>{props.name}</p>

        <p className={styles.summary}>{props.summary}</p>
      </div>
    </Link>
  );
}
