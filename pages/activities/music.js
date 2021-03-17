import Head from 'next/head';
import Container from 'react-bootstrap/Container';

import styles from '../../styles/Activities.module.scss';

const Music = () => {
  return (
    <>
      <Head>
        <title>Music – Celsius</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={styles.container}>
        <h1 className={styles.headerText}>Music</h1>
        <h4 className={styles.headerSubtext} style={{ marginBottom: '2rem' }}>Check out a very cool list of songs curated by our team members below</h4>
        <div className={styles.bottom} style={{ justifyContent: 'center' }}>
          <iframe
            src="https://open.spotify.com/embed/playlist/4tOIR5AylF1TFUvJizRtT7"
            width="300"
            height="380"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </Container>
    </>
  );
};

export default Music;
