import Head from 'next/head';
import Container from 'react-bootstrap/Container';

import styles from '../styles/Leaderboard.module.scss';

const Leaderboard = () => {
  return (
    <>
      <Head>
        <title>UChicago Mental Health Resources – Celsius</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={styles.container}>
        <h1 className={styles.headerText}>UChicago Mental Health Resources</h1>
        <h4 className={styles.headerSubtext}>Check out professional resources</h4>
        <div className={styles.bottom}>
          <div className={styles.bottomItem}>
            <div className={styles.name}>Therapist-on-Call</div>
            <div>(773) 702-3625</div>
          </div>
          <div className={styles.bottomItem}>
            <div className={styles.name}>Virtual Let's Talk</div>
            <div>Monday 12-1 pm, Wednesday 1-2 pm, Friday 3-4 pm</div>
            <div style={{ marginTop: '0.25rem' }}>
              Email knghiem@uchicago.edu to request Zoom link and password
            </div>
          </div>
          <div className={styles.bottomItem}>
            <div className={styles.name}>Therapy Groups</div>
            <a href="https://wellness.uchicago.edu/mental-health/therapy-groups/" target="_blank">
              https://wellness.uchicago.edu/mental-health/therapy-groups/
            </a>
          </div>
          <div className={styles.bottomItem}>
            <div className={styles.name}>Unofficial Student Government Resource Book</div>
            <a href="https://sg.uchicago.edu/mental-health-resource-book" target="_blank">
              https://sg.uchicago.edu/mental-health-resource-book
            </a>
          </div>
          <div className={styles.bottomItem}>
            <div className={styles.name}>Additional UChicago Resources</div>
            <a href="https://wellness.uchicago.edu/mental-health/" target="_blank">
              https://wellness.uchicago.edu/mental-health/
            </a>
          </div>
        </div>

        <h1 className={styles.headerText}>United States Crisis Support Resources</h1>
        <h4 className={styles.headerSubtext}>
          In case of emergency, go to the nearest emergency room and dial 911.
        </h4>
        <div className={styles.bottom}>
          <div className={styles.bottomItem}>
            <div className={styles.name}>National Suicide Prevention Lifeline</div>
            <div>1-800-273-TALK (8255)</div>
          </div>
          <div className={styles.bottomItem}>
            <div className={styles.name}>Crisis Textline: Text message support for those in crisis</div>
            <div>Text NAMI to 741-741-24/7</div>
          </div>
          <div className={styles.bottomItem}>
            <div className={styles.name}>CARES: Mental health evaluation and services</div>
            <div>800-345-9049</div>
          </div>
          <div className={styles.bottomItem}>
            <div className={styles.name}>Lifeline Crisis Chat (Online live messaging)</div>
            <a href="https://suicidepreventionlifeline.org/chat/" target="_blank">
              https://suicidepreventionlifeline.org/chat/
            </a>
          </div>
          <div className={styles.bottomItem}>
            <div className={styles.name}>National Domestic Violence Hotline</div>
            <div>1-800-799-7233</div>
          </div>
          <div className={styles.bottomItem}>
            <div className={styles.name}>National Hopeline Network</div>
            <div>1-800-SUICIDE (800-784-2433)</div>
          </div>
          <div className={styles.bottomItem}>
            <div className={styles.name}>Self-Harm Hotline</div>
            <div>1-800-DONT CUT (1-800-366-8288)</div>
          </div>
          <div className={styles.bottomItem}>
            <div className={styles.name}>Essential local and community services</div>
            <div>
              211,{' '}
              <a href="https://www.211.org/" target="_blank">
                https://www.211.org/
              </a>
            </div>
          </div>
          <div className={styles.bottomItem}>
            <div className={styles.name}>Planned Parenthood Hotline</div>
            <div>1-800-230-PLAN (7526)</div>
          </div>
          <div className={styles.bottomItem}>
            <div className={styles.name}>Lifeline Crisis Chat (Online live messaging)</div>
            <a href="https://suicidepreventionlifeline.org/chat/" target="_blank">
              https://suicidepreventionlifeline.org/chat/{' '}
            </a>
          </div>
          <div className={styles.bottomItem}>
            <div className={styles.name}>National Council on Alcoholism & Drug Dependency Hope Line</div>
            <div>1-800-622-2255</div>
          </div>
          <div className={styles.bottomItem}>
            <div className={styles.name}>GLBT Hotline</div>
            <div>1-888-843-4564</div>
          </div>
          <div className={styles.bottomItem}>
            <div className={styles.name}>TREVOR Crisis Hotline</div>
            <div>1-866-488-7386</div>
          </div>
        </div>

        <h1 className={styles.headerText}>Wellness Events</h1>
        <h4 className={styles.headerSubtext}>Check out nearby events</h4>
        <div className={styles.bottom} style={{ justifyContent: 'center' }}>
          <a href="https://wellness.uchicago.edu/" target="_blank">
            <button className={styles.shareButton} style={{ marginTop: '1rem' }}>View Website</button>
          </a>
        </div>
      </Container>
    </>
  );
};

export default Leaderboard;
