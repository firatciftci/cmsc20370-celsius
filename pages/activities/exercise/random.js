import Head from 'next/head';
import Container from 'react-bootstrap/Container';

import styles from '../../../styles/Activities.module.scss';

const RandomExercise = () => {
  return (
    <>
      <Head>
        <title>Random Exercise – Celsius</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={styles.container}>
        <h1 className={styles.headerText}>Random Exercise</h1>
        <Container className={styles.content}>
          <div className={styles.bottom} style={{ justifyContent: 'center' }}>
            <div
              style={{
                display: 'grid',
                textAlign: 'center',
                color: '#333',
                backgroundColor: '#ffffff',
                borderRadius: '1.125rem',
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
                padding: '0.75rem 1.25rem',
              }}
            >
              <div>Here is a random task:</div>
              <span style={{ textAlign: 'center', fontSize: '1.75rem', fontWeight: '600', color: '#333' }}>
                Do 10 pushups and 2 minutes of plank!
              </span>
              <span style={{ textAlign: 'center', fontSize: '1.75rem', fontWeight: '600', color: '#333' }}>
                Go!
              </span>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default RandomExercise;
