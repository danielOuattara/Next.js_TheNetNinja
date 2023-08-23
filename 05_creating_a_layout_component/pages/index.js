import Head from "next/head";
// import Image from 'next/image'; // ?
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  <Head>
    <title>Create Next App</title>
    <meta name="ninja next.js" content="Generated by create next app by" />
    <link rel="icon" href="/favicon.ico" />
  </Head>;
  return (
    <div>
      <h1>Home page</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad architecto
        praesentium perspiciatis debitis dicta eius molestias quae earum autem
        deleniti? Ut deserunt quidem quia fugit dicta distinctio accusantium
        sequi magni.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad architecto
        praesentium perspiciatis debitis dicta eius molestias quae earum autem
        deleniti? Ut deserunt quidem quia fugit dicta distinctio accusantium
        sequi magni.
      </p>
      <Link href="/ninjas">
        <a>See Ninjna Listing</a>
      </Link>
    </div>
  );
}
