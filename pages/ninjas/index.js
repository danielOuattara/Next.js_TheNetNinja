
import styles from './../../styles/Ninjas.module.css';
import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return {
        props: { ninjas: data }
    }
};

import Head from 'next/head';

const Ninja = ({ ninjas }) => {
    return (
        <div>
            <Head>
                <title> Ninjas List | Home </title>
                <meta name="keywords" content="ninjas site list home" />
            </Head>
            <h2>Ninjas Repertory</h2>
            {ninjas.map(ninja => (
                <Link key={ninja.id} href={"/ninjas/" + ninja.id}>
                    <a className={styles.single} >
                        <h3><span>{ninja.id}</span> - {ninja.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
    );
}
export default Ninja;