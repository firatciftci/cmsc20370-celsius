import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/History.module.scss';

const TaskHistory = () => {
  return (
    <>
      <Head>
        <title>Task History – Celsius</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <h1 className={styles.headerText}>Task History</h1>
        <h4 className={styles.headerSubtext}>Check out the previous tasks you have done</h4>
        <div className={styles.content}>
          <div className={styles.bottom}>
            <div className={styles.bottomItem}>
              <div className={styles.bottomHeader}>Your favorite tasks</div>
              <div className={styles.listItem}>
                <div className={styles.listText}>Meditate for 15 minutes</div>
              </div>
              <div className={styles.listItem}>
                <div className={styles.listText}>10 pushups</div>
              </div>
              <div className={styles.listItem}>
                <div className={styles.listText}>Power nap</div>
              </div>
            </div>
            <div className={styles.bottomItem}>
              <div className={styles.bottomHeader}>Tasks to improve on</div>
              <div className={styles.listItem}>
                <div className={styles.listText}>Call a family member</div>
              </div>
              <div className={styles.listItem}>
                <div className={styles.listText}>Go outside and take a walk</div>
              </div>
            </div>
          </div>
          <div style={{ display: 'grid' }}>
            <div
              style={{
                userSelect: 'none',
                pointerEvents: 'none',
                justifySelf: 'center',
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
              }}
            >
              <Image src="/calendar.png" alt="Icon" width={250} height={260} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TaskHistory;
