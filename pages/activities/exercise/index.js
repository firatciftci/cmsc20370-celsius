import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';

import styles from '../../../styles/Activities.module.scss';

const Excercise = () => {
  return (
    <>
      <Head>
        <title>Exercise – Celsius</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={styles.container}>
        <h1 className={styles.headerText}>Exercise</h1>
        <Container className={styles.content}>
          <div className={styles.bottom}>
            <Link href={'/activities/exercise/videos'}>
              <a className={styles.shareButton}>Watch an exercise video</a>
            </Link>
            <Link href={'/activities/exercise/random'}>
              <a className={styles.shareButton}>Give me a task</a>
            </Link>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Excercise;
