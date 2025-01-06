import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Image
          className={styles.img}
          src="/img/me.jpg"
          alt="Photo of Diego Centeno"
          width={400}
          height={400}
          priority
        />
        <div className={styles.intro}>
          <p>
            Hello there! I&apos;m Diego Centeno, a fullstack software developer
            interested in game development and multiplayer server architecture.
          </p>
          <div className={styles.ctas}>
            <Link className={styles.primary} href="/projects">
              Check out my projects
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
