import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';
import Countdown from 'react-countdown';

import styles from '../../../styles/Activities.module.scss';

const Completionist = () => <span>Timer is done!</span>;

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <div
        style={{
          display: 'grid',
          color: '#333',
          backgroundColor: '#ffffff',
          borderRadius: '1.125rem',
          boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
          padding: '0.75rem 1.25rem',
        }}
      >
        <div>Here is a 35-minute timer:</div>
        <span
          style={{
            textAlign: 'center',
            fontSize: '3rem',
            fontWeight: '600',
            color: '#333',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          0{hours}:{String(minutes).length === 1 ? '0' + minutes : minutes}:{String(seconds).length === 1 ? '0' + seconds : seconds}
        </span>
      </div>
    );
  }
};

const PowerNapSleep = () => {
  return (
    <>
      <Head>
        <title>Power Nap Timer – Celsius</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={styles.container}>
        <h1 className={styles.headerText}>Power Nap Timer</h1>
        <Container className={styles.content}>
          <div className={styles.bottom} style={{ justifyContent: 'center' }}>
            <Countdown date={Date.now() + 2100000} renderer={renderer} />
          </div>
        </Container>
      </Container>
    </>
  );
};

export default PowerNapSleep;
