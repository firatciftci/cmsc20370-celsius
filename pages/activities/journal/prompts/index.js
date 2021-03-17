import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';

import styles from '../../../../styles/Activities.module.scss';

const PromptsJournal = () => {
  return (
    <>
      <Head>
        <title>Journal Prompts – Celsius</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={styles.container}>
        <h1 className={styles.headerText}>Journal Prompts</h1>
        <h4 className={styles.headerSubtext}>
          Pick a journal prompt from the list below and start writing your journal
        </h4>
        <div className={styles.bottom}>
          <Link href={'/activities/journal/prompts/1'}>
            <a className={styles.bottomItemLink}>
              <div className={styles.name}>Three things I am grateful for today…</div>
              <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#888' }}>PICK PROMPT</div>
            </a>
          </Link>
          <Link href={'/activities/journal/prompts/2'}>
            <a className={styles.bottomItemLink}>
              <div className={styles.name}>I didn't feel so well today because…</div>
              <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#888' }}>PICK PROMPT</div>
            </a>
          </Link>
          <Link href={'/activities/journal/prompts/3'}>
            <a className={styles.bottomItemLink}>
              <div className={styles.name}>Today is special for me becase…</div>
              <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#888' }}>PICK PROMPT</div>
            </a>
          </Link>
          <Link href={'/activities/journal/prompts/4'}>
            <a className={styles.bottomItemLink}>
              <div className={styles.name}>I am proud of myself today because…</div>
              <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#888' }}>PICK PROMPT</div>
            </a>
          </Link>
          <Link href={'/activities/journal/prompts/5'}>
            <a className={styles.bottomItemLink}>
              <div className={styles.name}>The best thing that happened today is…</div>
              <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#888' }}>PICK PROMPT</div>
            </a>
          </Link>
          <Link href={'/activities/journal/prompts/6'}>
            <a className={styles.bottomItemLink}>
              <div className={styles.name}>I felt supported and loved today because…</div>
              <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#888' }}>PICK PROMPT</div>
            </a>
          </Link>
          <Link href={'/activities/journal/prompts/7'}>
            <a className={styles.bottomItemLink}>
              <div className={styles.name}> I really look forward to…</div>
              <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#888' }}>PICK PROMPT</div>
            </a>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default PromptsJournal;
