import Head from 'next/head';
import Link from 'next/link';

import Container from 'react-bootstrap/Container';
import Image from 'next/image';

import styles from '../styles/Home.module.scss';

const Home = () => {
  return (
    <>
      <Head>
        <title>Celsius – Your Mental Health Companion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={styles.container}>
        <h1 className={styles.headerText}>Dashboard</h1>
        <h4 className={styles.headerSubtext}>Your mental health — in one place</h4>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.subheader}>Your score today</div>
            <div style={{ userSelect: 'none', pointerEvents: 'none' }}>
              <Image src="/score.png" alt="Icon" width={200} height={200} />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.subheader} style={{ marginBottom: '1rem' }}>
              Your suggested activities
            </div>
            <div className={styles.listItem}>
              <div style={{ userSelect: 'none', pointerEvents: 'none' }}>
                <Image src="/iconChecked.png" alt="Icon" width={30} height={28} />
              </div>
              <div className={styles.listText}>
                <Link href={'/activities/meditation'}>
                  <a className={styles.listLink}>Meditate</a>
                </Link>{' '}
                for 15 minutes <span className={styles.streakText}>🔥 (x1.25 pts)</span>
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
                for 20 minutes <span className={styles.streakText}>🔥 (x1.05 pts)</span>
              </div>
            </div>
            <div className={styles.listItem}>
              <div style={{ userSelect: 'none', pointerEvents: 'none' }}>
                <Image src="/iconUnchecked.png" alt="Icon" width={30} height={28} />
              </div>
              <div className={styles.listText}>
                <Link href={'/activities/call'}>
                  <a className={styles.listLink}>Call</a>
                </Link>{' '}
                a family member
              </div>
            </div>
            <hr />
            <div className={styles.streak}>
              <div className={styles.streakIcon}>🔥</div>
              <div className={styles.streakTextUp}>4 day streak!</div>
              <div className={styles.streakTextDown}>You have been active for 4 consecutive days</div>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.subheader}>Your week so far</div>
            <div style={{ userSelect: 'none', pointerEvents: 'none' }}>
              <Image src="/chart.png" alt="Icon" width={500} height={155} />
            </div>
            <div
              style={{
                display: 'grid',
                gridAutoFlow: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                columnGap: '1rem',
              }}
            >
              <Link href={'/history'}>
                <a className={styles.historyButton}>View History</a>
              </Link>
              <Link href={'/leaderboard'}>
                <a className={styles.historyButton}>View Leaderboard</a>
              </Link>
            </div>
          </div>
          <div className={styles.bottom2}>
            <div className={styles.subheader}>You can also pick any activity from this list!</div>
            <Link href={'/activities/meditation'}>
              <a className={styles.activityButton}>Meditation</a>
            </Link>
            <Link href={'/activities/exercise'}>
              <a className={styles.activityButton}>Exercise</a>
            </Link>
            <Link href={'/activities/sleep'}>
              <a className={styles.activityButton}>Sleep</a>
            </Link>
            <Link href={'/activities/journal'}>
              <a className={styles.activityButton}>Journal</a>
            </Link>
            <Link href={'/activities/games'}>
              <a className={styles.activityButton}>Games</a>
            </Link>
            <Link href={'/activities/connection'}>
              <a className={styles.activityButton}>Connection</a>
            </Link>
            <Link href={'/activities/music'}>
              <a className={styles.activityButton}>Music</a>
            </Link>
            <Link href={'/activities/exercise'}>
              <a className={styles.activityButton}>Random!</a>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
