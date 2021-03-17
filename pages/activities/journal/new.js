import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';

import styles from '../../../styles/Activities.module.scss';

const NewJournal = () => {
  return (
    <>
      <Head>
        <title>New Journal – Celsius</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={styles.container}>
        <h1 className={styles.headerText}>New Journal</h1>
        <Container className={styles.content}>
          <div className={styles.bottom}>
            <Link href={'/activities/journal/new-random'}>
              <a className={styles.shareButton}>Give me a random prompt!</a>
            </Link>
            <Link href={'/activities/journal/prompts'}>
              <a className={styles.shareButton}>Select my own prompt</a>
            </Link>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default NewJournal;
