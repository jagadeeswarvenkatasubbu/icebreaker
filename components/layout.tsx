
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Layout({ children }) {
    return (
        <div className={styles.container}>
          <Head>
            <title>Ice-breaker!</title>
            <meta name="description" content="Ice-breaker!" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main className={styles.main}>
            <div>{children}</div>
          </main>
    
          <footer className={styles.footer}>
            <a href="#" >
              Copyright section. Created by Jagadeeswar Venkatasubbu
            </a>
          </footer>
        </div>
      )
}