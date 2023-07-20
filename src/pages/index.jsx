import Head from 'next/head';
import styles from 'src/styles/Home.module.css';
import {Footer } from 'src/components/Footer';
import {Main} from 'src/components/Main';
import {Header}from 'src/components/Header';
import {  useCallback, useEffect, useState } from 'react';

export default function Home() {
  const [foo, setFoo] = useState(1);
  const [text, setText] = useState('');
  const [isShow, setIsshow] = useState(true);

  const handleClick = useCallback(()=> {
    if (foo < 10){
      setFoo((foos) => foo + 1);
    }
    //アロー関数でかく
  },[foo]);

  useEffect(() =>{
    document.body.style.backgroundColor = 'lightblue';

    return() =>{
    document.body.style.backgroundColor = '';
    }
  }, []);

  const handleChange =useCallback((e) =>{
    if(e.target.value.length > 5){
      alert('５文字以内で');
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handlemooday = useCallback(() =>{
            setIsshow((isShow) => !isShow)
            //!isShowdでも
        }, [isShow]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Super Sasaii</title>
      </Head>
      <Header /> 
      {isShow ?<h1>{foo}</h1>: null}
      <button onClick={handleClick}>
        ぼたん
      </button>
      <button onClick={handlemooday}>{isShow ?'非表示' : '表示'}
      </button>
      <input type='text' value={text} onChange={handleChange}
        
        />
      <Main page='index!' />
      <Footer />
    </div>
  )
}