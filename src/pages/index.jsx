import Head from 'next/head';
import styles from 'src/styles/Home.module.css';
import {Footer } from 'src/components/Footer';
import {Main} from 'src/components/Main';
import {Header}from 'src/components/Header';
import { useCallback } from 'react';

export default function Home() {
  const of = 1;
  const handleClick = useCallback((e)=> {
    console.log(e.target.href);
    e.preventDefault();
    alert(of);
  },[]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Super Sasaii</title>
      </Head>
      <Header /> 
      <a
        href='/koko'
        onClick={handleClick}
        >
        ぼたん
      </a>
      <Main page='index!' />
      <Footer />
    </div>
  )
}