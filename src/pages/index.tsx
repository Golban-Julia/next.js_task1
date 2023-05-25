import Head from 'next/head'
import { FC } from "react";
import styles from '@/styles/Home.module.scss'


const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Users list</title>
        <meta name="description" content="Users list" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainPage}>
        <div >
          <h1>Users list!</h1>
        </div>
      </main>
    </>
  )
};


export default Home;