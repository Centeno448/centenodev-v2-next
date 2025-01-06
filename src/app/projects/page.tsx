import Image from "next/image";

export default function Projects() {
  return (
    <>
      <main>
        <Image
          src="/img/me.jpg"
          alt="Photo of Diego Centeno"
          width={400}
          height={400}
          priority
        />
        <div>
          <p>I am a new page</p>
        </div>
      </main>
    </>
  );
}
