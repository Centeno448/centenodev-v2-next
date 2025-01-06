import styles from "./navbar.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <p>CentenoDev</p>

      <ul className={styles.navLink}>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/diego-andres-centeno/"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.socialLogo}
              src="/linked-in.svg"
              alt="LinkedIn logo"
              width={20}
              height={20}
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/Centeno448/" rel="noopener noreferrer">
            <Image
              className={styles.socialLogo}
              src="/github-mark.svg"
              alt="Github logo"
              width={20}
              height={20}
            />
          </a>
        </li>
      </ul>
    </div>
  );
}