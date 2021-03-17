import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';

import styles from '../../../styles/Activities.module.scss';

const Journal = () => {
  return (
    <>
      <Head>
        <title>Journal – Celsius</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={styles.container}>
        <h1 className={styles.headerText}>Journal</h1>
        <h4 className={styles.headerSubtext}>You can find your past entries below and create new ones</h4>
        <div className={styles.bottom}>
          <div className={styles.bottomItem}>
            <div className={styles.name}>02/17/2021, 10:40 PM 🙂</div>
            <div>Three things I am grateful for today:…</div>
            <Link href={'/activities/journal/4'}>
              <button className={styles.bottomItemButton}>View</button>
            </Link>
          </div>
          <div className={styles.bottomItem}>
            <div className={styles.name}>02/16/2021, 9:06 AM 😱</div>
            <div>Paper is going to due tomorrow. I haven’t done the readings...</div>
            <Link href={'/activities/journal/3'}>
              <button className={styles.bottomItemButton}>View</button>
            </Link>
          </div>
          <div className={styles.bottomItem}>
            <div className={styles.name}>02/15/2021, 10:40 AM 😏</div>
            <div>I feel proud that I am finishing PSET ahead of my study buddie..</div>
            <Link href={'/activities/journal/2'}>
              <button className={styles.bottomItemButton}>View</button>
            </Link>
          </div>
          <div className={styles.bottomItem}>
            <div className={styles.name}>02/14/2021, 11:53 PM 💩</div>
            <div>Feeling bad because everybody is doing PDA on social media...</div>
            <Link href={'/activities/journal/1'}>
              <button className={styles.bottomItemButton}>View</button>
            </Link>
          </div>
          <Link href={'/activities/journal/new'}>
            <button className={styles.shareButton}>+ Create New Entry</button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Journal;
