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
          <div className={styles.dis_region}>
            <div className={styles.region_small}></div>
            <div>Average Income for the Region</div>
          </div>
          <div className={styles.dis_national}>
            <div className={styles.national_small}></div>
            <div>Average Income for the National</div>
          </div>
        </div>
        <div className={styles.regional_bar}></div>
        <div className={styles.national_bar}></div>
        <div className={styles.index_line}>
          <div className={styles.box_0}>
            <div className={styles.line_0}></div>
            <div className={styles.num_0}>0</div>
          </div>
          <div className={styles.box_10}>
            <div className={styles.line_10}></div>
            <div className={styles.num_10}>10,000</div>
          </div>
          <div className={styles.box_20}>
            <div className={styles.line_20}></div>
            <div className={styles.num_20}></div>
          </div>
          <div className={styles.box_30}>
            <div className={styles.line_30}></div>
            <div className={styles.num_30}></div>
          </div>
          <div className={styles.box_40}>
            <div className={styles.line_40}></div>
            <div className={styles.num_40}></div>
          </div>
          <div className={styles.box_50}>
            <div className={styles.line_50}></div>
            <div className={styles.num_50}></div>
          </div>
          <div className={styles.box_60}>
            <div className={styles.line_60}></div>
            <div className={styles.num_60}></div>
          </div>
          <div className={styles.box_70}>
            <div className={styles.line_70}></div>
            <div className={styles.num_70}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
