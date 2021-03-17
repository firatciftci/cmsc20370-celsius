import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';

import styles from '../../../styles/Activities.module.scss';

const Meditation = () => {
  return (
    <>
      <Head>
        <title>Meditation – Celsius</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={styles.container}>
        <h1 className={styles.headerText}>Meditation</h1>
        <Container className={styles.content}>
          <div className={styles.bottom}>
            <Link href={'/activities/meditation/guided'}>
              <a className={styles.shareButton}>Guided Meditation</a>
            </Link>
            <Link href={'/activities/meditation/unguided'}>
              <a className={styles.shareButton}>Unguided Timer</a>
            </Link>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Meditation;
