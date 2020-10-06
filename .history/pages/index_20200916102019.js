import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Header from '../comps/Header';
import styles from './index.module.css';

export default function Home() {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Average Income</h1>
      <p>The amount of money an individual family or household makes in Canada</p>
    </div>
  )
}
