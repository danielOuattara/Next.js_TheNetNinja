
import styles from './../../styles/Ninjas.module.css';


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

            <h1>Ninja Repertory</h1>

            {ninjas.map(ninja => (
                <div key={ninja.id}>
                    <a className={styles.single} >
                        <h3>{ninja.name}</h3>
                        {/* {console.log(ninja)} */}
                    </a>
                </div>
            ))}
        </div>
    );
}

export default Ninja;