import Head from 'next/head';
import Container from 'react-bootstrap/Container';

import styles from '../../../styles/Activities.module.scss';

const AllVideosExercise = () => {
  return (
    <>
      <Head>
        <title>Exercise Videos – Celsius</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={styles.container}>
        <h1 className={styles.headerText}>Exercise Videos</h1>
        <h4 className={styles.headerSubtext}>Pick a theme below and view its playlist</h4>
        <div className={styles.bottom}>
          <a
            href={'https://youtube.com/playlist?list=PLliZnDRmG_wKiUGgi03HcEUHaoxX_Y2b-'}
            className={styles.bottomItemLink}
          >
            <div className={styles.name}>HIIT</div>
            <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#888' }}>VIEW PLAYLIST</div>
          </a>
          <a
            href={'https://youtube.com/playlist?list=PLliZnDRmG_wL1XP69mR3bIB6eooaY-MA6'}
            className={styles.bottomItemLink}
          >
            <div className={styles.name}>Strength</div>
            <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#888' }}>VIEW PLAYLIST</div>
          </a>
          <a
            href={'https://youtube.com/playlist?list=PLliZnDRmG_wJJt_Hg8CGUb9Cx1WVfbhvF'}
            className={styles.bottomItemLink}
          >
            <div className={styles.name}>Yoga</div>
            <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#888' }}>VIEW PLAYLIST</div>
          </a>
          <a
            href={'https://youtube.com/playlist?list=PLliZnDRmG_wL9WJGhTLM9R8OsCsvZzWLd'}
            className={styles.bottomItemLink}
          >
            <div className={styles.name}>Cardio</div>
            <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#888' }}>VIEW PLAYLIST</div>
          </a>
          <a
            href={'https://youtube.com/playlist?list=PLliZnDRmG_wIScCz1Fgp6UqaeNOjAnlc9'}
            className={styles.bottomItemLink}
          >
            <div className={styles.name}>Kickboxing</div>
            <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#888' }}>VIEW PLAYLIST</div>
          </a>
          <a
            href={'https://youtube.com/playlist?list=PLliZnDRmG_wJ_1wKD59IBeAVayS8h-0JT'}
            className={styles.bottomItemLink}
          >
            <div className={styles.name}>Pilates</div>
            <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#888' }}>VIEW PLAYLIST</div>
          </a>
        </div>
      </Container>
    </>
  );
};

export default AllVideosExercise;
