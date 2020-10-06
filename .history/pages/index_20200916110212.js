import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Header from '../comps/Header';
import styles from './index.module.css';

export default function Home() {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Average Income</h1>
      <p>The amount of money an individual family or household makes in Canada</p>
      <div className={styles.graph}>
        <div className={styles.dis_big_box}>
          <div className={styles.dis_reigon}>
            <div className={styles.reigon_small}>1</div>
            <div>Average Income for the Region</div>
          </div>
          <div className={styles.dis_national}>
            <div className={styles.national_small}></div>
            <div>Average Income for the National</div>
          </div>
        </div>
      </div>
    </div>
  )
}
