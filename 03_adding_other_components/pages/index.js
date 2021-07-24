import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Home page</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad architecto praesentium perspiciatis debitis dicta eius molestias quae earum autem deleniti? Ut deserunt quidem quia fugit dicta distinctio accusantium sequi magni.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad architecto praesentium perspiciatis debitis dicta eius molestias quae earum autem deleniti? Ut deserunt quidem quia fugit dicta distinctio accusantium sequi magni.</p>
      <Footer />
    </div>
  )
}
