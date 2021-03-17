import Head from 'next/head';
import Container from 'react-bootstrap/Container';

import styles from '../../../styles/Activities.module.scss';

const AllVideosMeditation = () => {
  return (
    <>
      <Head>
        <title>Guided Meditation – Celsius</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={styles.container}>
        <h1 className={styles.headerText}>Guided Meditation</h1>
        <h4 className={styles.headerSubtext}>Pick a theme below and view its playlist</h4>
        <div className={styles.bottom}>
          <a
            href={'https://youtube.com/playlist?list=PLliZnDRmG_wJARu-VCMdMxAFLvj9jIJVL'}
            className={styles.bottomItemLink}
          >
            <div className={styles.name}>Anxiety & Stress</div>
            <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#888' }}>VIEW PLAYLIST</div>
          </a>
          <a
            href={'https://youtube.com/playlist?list=PLliZnDRmG_wI27h4aAJCgYLYMU19Xpbs8'}
            className={styles.bottomItemLink}
          >
            <div className={styles.name}>Spiritual</div>
            <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#888' }}>VIEW PLAYLIST</div>
          </a>
          <a
            href={'https://youtube.com/playlist?list=PLliZnDRmG_wLV_lFJcAlJKPImv9r2-cb5'}
            className={styles.bottomItemLink}
          >
            <div className={styles.name}>Happiness</div>
            <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#888' }}>VIEW PLAYLIST</div>
          </a>
          <a
            href={'https://youtube.com/playlist?list=PLliZnDRmG_wIasLK166CsUiniitnWad_B'}
            className={styles.bottomItemLink}
          >
            <div className={styles.name}>Relationships</div>
            <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#888' }}>VIEW PLAYLIST</div>
          </a>
        </div>
      </Container>
    </>
  );
};

export default AllVideosMeditation;
