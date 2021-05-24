import styles from '../styles/Home.module.css'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
        <h1 className={styles.title}>
          Welcome to ice-breaker!
        </h1>

        <div className={styles.grid}>
            <a href="/cards" className={styles.card}>
              <h2>Cards &rarr;</h2>
              <p>Generates random fun question!</p>
            </a>
        </div>
    </Layout>
  )
}
