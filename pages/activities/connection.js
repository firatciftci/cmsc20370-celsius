import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';

import styles from '../../styles/Activities.module.scss';

const Connection = () => {
  return (
    <>
      <Head>
        <title>Your Connections – Celsius</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={styles.container}>
        <h1 className={styles.headerText}>Your Connections</h1>
        <h4 className={styles.headerSubtext}>
          Call your friends, family, and loved ones from your list of connections below
        </h4>
        <div className={styles.bottom}>
          <div className={styles.bottomItem}>
            <div className={styles.name}>Bing Tian Chia</div>
            <div>(555) 123-4567</div>
            <button className={styles.bottomItemButton}>Contact</button>
          </div>
          <div className={styles.bottomItem}>
            <div className={styles.name}>Andee Song</div>
            <div>(555) 563-2356</div>
            <button className={styles.bottomItemButton}>Contact</button>
          </div>
          <div className={styles.bottomItem}>
            <div className={styles.name}>Xingyu Wang</div>
            <div>(555) 256-8521</div>
            <button className={styles.bottomItemButton}>Contact</button>
          </div>
          <div className={styles.bottomItem}>
            <div className={styles.name}>Hugo Chan</div>
            <div>(555) 314-1157</div>
            <button className={styles.bottomItemButton}>Contact</button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Connection;
