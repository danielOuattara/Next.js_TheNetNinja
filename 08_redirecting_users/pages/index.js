// import Head from 'next/head';
// import Image from 'next/image';
import styles from "../styles/Home.module.css";
// import Navbar from '../components/NavBar';
// import Footer from '../components/Footer';
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Home page</h1>
      <p className={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad architecto
        praesentium perspiciatis debitis dicta eius molestias quae earum autem
        deleniti? Ut deserunt quidem quia fugit dicta distinctio accusantium
        sequi magni.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad architecto
        praesentium perspiciatis debitis dicta eius molestias quae earum autem
        deleniti? Ut deserunt quidem quia fugit dicta distinctio accusantium
        sequi magni.
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
  );
}
