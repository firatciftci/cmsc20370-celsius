import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';

import styles from '../../../styles/Activities.module.scss';

const Sleep = () => {
  return (
    <>
      <Head>
        <title>Sleep – Celsius</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={styles.container}>
        <h1 className={styles.headerText}>Sleep</h1>
        <Container className={styles.content}>
          <div className={styles.bottom}>
              <a href={'https://youtube.com/playlist?list=PLliZnDRmG_wLzEOfiLqMOgp8VwHCUyRCw'} className={styles.shareButton}>Show me sleep aid resources</a>
            <Link href={'/activities/sleep/power-nap'}>
              <a className={styles.shareButton}>Set a power nap alarm for me</a>
            </Link>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Sleep;
