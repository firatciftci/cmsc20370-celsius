import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';

import styles from '../../../styles/Activities.module.scss';

const GuidedMeditation = () => {
  return (
    <>
      <Head>
        <title>Exercise Videos – Celsius</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={styles.container}>
        <h1 className={styles.headerText}>Exercise Videos</h1>
        <Container className={styles.content}>
          <div className={styles.bottom}>
            <a href="https://www.youtube.com/watch?v=jpizoUy4K9s" target="_blank" className={styles.shareButton}>Play me a random video</a>

            <Link href={'/activities/exercise/all-videos'}>
              <a className={styles.shareButton}>Select my own</a>
            </Link>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default GuidedMeditation;
