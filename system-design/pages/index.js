import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
    
    return (

        <>
            <Head>
                <title>Ninja List | Home</title>
                <meta name="keywords" content="ninjas"/>
            </Head>
            <div>
                <h1 className={styles.title}>Homepage</h1>
                <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac finibus ante, ac tempus nisl. Morbi malesuada augue eget congue fringilla. Integer eget enim imperdiet, gravida turpis nec, vehicula augue. Pellentesque dignissim massa nec risus dapibus pulvinar. Nulla pulvinar sed nulla sit amet pharetra. Integer nec gravida neque. Donec convallis.</p>
                <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac finibus ante, ac tempus nisl. Morbi malesuada augue eget congue fringilla. Integer eget enim imperdiet, gravida turpis nec, vehicula augue. Pellentesque dignissim massa nec risus dapibus pulvinar. Nulla pulvinar sed nulla sit amet pharetra. Integer nec gravida neque. Donec convallis.</p>
                <Link href="/ninjas">
                    <a className={styles.btn}> See Ninja Listing</a>
                </Link>
            </div>
        </>
    )
}