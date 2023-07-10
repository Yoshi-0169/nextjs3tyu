import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Footer } from '../components/Footer';
import {Links} from '../components/Links';
import {Headline} from '../components/Headline';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create NoCreate</title>
        <link rel="icon" href="/mori.ico" />
      </Head>

      <main>
        <Headline pages='koko'/>
        <Links />
      </main>
      <Footer />
    </div>
  )
}
