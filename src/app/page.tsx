import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";
import { fetchCMSContent } from "./utils";

export default async function Home() {
  const data = await fetchCMSContent(
    `${process.env.CMS_BASE_URL}/api/homepage`
  );
  const homepage = await data.json();

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
          <p>{homepage.data.greeting}</p>
          <div className={styles.ctas}>
            <Link className={styles.primary} href="/projects">
              {homepage.data.cta}
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
