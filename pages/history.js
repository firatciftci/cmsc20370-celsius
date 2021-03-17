import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/History.module.scss';

const History = () => {
  return (
    <>
      <Head>
        <title>History – Celsius</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <h1 className={styles.headerText}>History</h1>
        <h4 className={styles.headerSubtext}>Check out your progress</h4>
        <div className={styles.content}>
          <div className={styles.item}>
            <div style={{ userSelect: 'none', pointerEvents: 'none' }}>
              <Image src="/history.png" alt="History graph" width={500} height={200} />
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.subheader}>On this day</div>
            <div className={styles.subsubheader}>
              {new Date().toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </div>
            <div className={styles.bottomItem}>
              <div className={styles.bottomHeader}>Activities completed</div>
              <div className={styles.listItem}>
                <div style={{ userSelect: 'none', pointerEvents: 'none' }}>
                  <Image src="/iconChecked.png" alt="Icon" width={30} height={28} />
                </div>
                <div className={styles.listText}>
                  <Link href={'/activities/meditation'}>
                    <a className={styles.listLink}>Meditate</a>
                  </Link>{' '}
                  for 15 minutes
                </div>
              </div>
              <div className={styles.listItem}>
                <div style={{ userSelect: 'none', pointerEvents: 'none' }}>
                  <Image src="/iconChecked.png" alt="Icon" width={30} height={28} />
                </div>
                <div className={styles.listText}>
                  <Link href={'/activities/exercise'}>
                    <a className={styles.listLink}>Exercise</a>
                  </Link>{' '}
                  for 20 minutes
                </div>
              </div>
              <Link href={'/task-history'}>
                <a className={styles.historyButton}>View Task History</a>
              </Link>
            </div>
            <div className={styles.bottomItem}>
              <div className={styles.bottomHeader}>What you wrote</div>
              <div className={styles.bottomQuote}>"I finished my inclusive tech midterm today."</div>
              <div className={styles.bottomQuote}>"Learning a lot and feeling good!"</div>
              <Link href={'/activities/journal'}>
                <a className={styles.historyButton}>View Journal</a>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default History;
