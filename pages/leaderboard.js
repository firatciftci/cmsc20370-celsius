import { useState } from 'react';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import styles from '../styles/Leaderboard.module.scss';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const Leaderboard = () => {
  const [shared, setShared] = useState('Share');

  return (
    <>
      <Head>
        <title>Leaderboard – Celsius</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={styles.container}>
        <h1 className={styles.headerText}>Leaderboard</h1>
        <h4 className={styles.headerSubtext}>Optionally share your progress with your friends</h4>
        <Container className={styles.content}>
          <div className={styles.bottom}>
            <div className={styles.bottomItem}>
              <div className={styles.name}>Hugo</div>
              <div className={styles.points}>256 points</div>
            </div>
            <div className={styles.bottomItem}>
              <div className={styles.name}>Xingyu</div>
              <div className={styles.points}>250 points</div>
            </div>
            <div className={styles.bottomItem}>
              <div className={styles.name}>Andee</div>
              <div className={styles.points}>178 points</div>
            </div>
            <div className={styles.bottomItem}>
              <div className={styles.name}>Bing Tian</div>
              <div className={styles.points}>103 points</div>
            </div>
            <div className={styles.bottomItem} style={{ backgroundColor: '#ffac60' }}>
              <div className={styles.name}>You</div>
              <div className={styles.points}>80 points</div>
            </div>
            <CopyToClipboard
              text={'Hi! I have a score of 80 points on Celsius! I rock!'}
              onCopy={async () => {
                setShared('Leaderboard Score Copied');
                await delay(1500);
                setShared('Share');
              }}
            >
              <button className={styles.shareButton}>
                <span>{shared}</span>
              </button>
            </CopyToClipboard>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Leaderboard;
