import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';

import styles from '../../../../styles/Activities.module.scss';

const NewPromptJournal = () => {
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
            <textarea name="journal" id="" cols="30" rows="10">
              Today is special for me becase…
            </textarea>
          </div>
          <div style={{ display: 'grid', justifySelf: 'center', marginTop: '1rem' }}>
            <Link href={'/activities/journal'}>
              <button className={styles.shareButton}>Save</button>
            </Link>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default NewPromptJournal;
