import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';

import styles from '../styles/Assessment.module.scss';

const Assessment = () => {
  const router = useRouter();

  const [firstRadio, setFirstRadio] = useState('');
  const [secondRadio, setSecondRadio] = useState('');
  const [thirdRadio, setThirdRadio] = useState('');
  const [fourthRadio, setFourthRadio] = useState('');
  const [fifthRadio, setFifthRadio] = useState('');
  const [sixthRadio, setSixthRadio] = useState('');
  const [seventhRadio, setSeventhRadio] = useState('');
  const [eighthRadio, setEighthRadio] = useState('');

  return (
    <>
      <Head>
        <title>Online Assessment – Celsius</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={styles.container}>
        <h1 className={styles.headerText}>Online Assessment</h1>
        <h4 className={styles.headerSubtext}>Answer a few questions about your habits</h4>
        <div className={styles.bottom}>
          <div className={styles.bottomItem}>
            <div className={styles.name}>When was the last time you called a friend?</div>
            <div className={styles.radioButtons}>
              <button
                style={firstRadio === '1' ? { backgroundColor: '#333', color: '#f0f0f0' } : null}
                onClick={() => setFirstRadio('1')}
              >
                {'>1 month ago'}
              </button>
              <button
                style={firstRadio === '2' ? { backgroundColor: '#333', color: '#f0f0f0' } : null}
                onClick={() => setFirstRadio('2')}
              >
                {'<2 weeks ago'}
              </button>
              <button
                style={firstRadio === '3' ? { backgroundColor: '#333', color: '#f0f0f0' } : null}
                onClick={() => setFirstRadio('3')}
              >
                {'~1 week ago'}
              </button>
              <button
                style={firstRadio === '4' ? { backgroundColor: '#333', color: '#f0f0f0' } : null}
                onClick={() => setFirstRadio('4')}
              >
                {'~3 days ago'}
              </button>
              <button
                style={firstRadio === '5' ? { backgroundColor: '#333', color: '#f0f0f0' } : null}
                onClick={() => setFirstRadio('5')}
              >
                {'Today'}
              </button>
            </div>
          </div>
          <div className={styles.bottomItem}>
            <div className={styles.name}>Do you feel disconnected from friends and family?</div>
            <div className={styles.radioButtons}>
              <button
                style={secondRadio === '1' ? { backgroundColor: '#333', color: '#f0f0f0' } : null}
                onClick={() => setSecondRadio('1')}
              >
                {'No'}
              </button>
              <button
                style={secondRadio === '2' ? { backgroundColor: '#333', color: '#f0f0f0' } : null}
                onClick={() => setSecondRadio('2')}
              >
                {'Yes'}
              </button>
            </div>
          </div>
          <div className={styles.bottomItem}>
            <div className={styles.name}>Please rate your self-care routine:</div>
            <div>(1 = I don't have a self-care routine, 5 = I am fully satisfied)</div>
            <div className={styles.radioButtons}>
              <button
                style={thirdRadio === '1' ? { backgroundColor: '#333', color: '#f0f0f0' } : null}
                onClick={() => setThirdRadio('1')}
              >
                {'1'}
              </button>
              <button
                style={thirdRadio === '2' ? { backgroundColor: '#333', color: '#f0f0f0' } : null}
                onClick={() => setThirdRadio('2')}
              >
                {'2'}
              </button>
              <button
                style={thirdRadio === '3' ? { backgroundColor: '#333', color: '#f0f0f0' } : null}
                onClick={() => setThirdRadio('3')}
              >
                {'3'}
              </button>
              <button
                style={thirdRadio === '4' ? { backgroundColor: '#333', color: '#f0f0f0' } : null}
                onClick={() => setThirdRadio('4')}
              >
                {'4'}
              </button>
              <button
                style={thirdRadio === '5' ? { backgroundColor: '#333', color: '#f0f0f0' } : null}
                onClick={() => setThirdRadio('5')}
              >
                {'5'}
              </button>
            </div>
          </div>
          <div className={styles.bottomItem}>
            <div className={styles.name}>Look around you, how organized is your room right now?</div>
            <div className={styles.radioButtons}>
              <button
                style={fourthRadio === '1' ? { backgroundColor: '#333', color: '#f0f0f0' } : null}
                onClick={() => setFourthRadio('1')}
              >
                {'Uninhabitable'}
              </button>
              <button
                style={fourthRadio === '2' ? { backgroundColor: '#333', color: '#f0f0f0' } : null}
                onClick={() => setFourthRadio('2')}
              >
                {'Messy'}
              </button>
              <button
                style={fourthRadio === '3' ? { backgroundColor: '#333', color: '#f0f0f0' } : null}
                onClick={() => setFourthRadio('3')}
              >
                {'Decent'}
              </button>
              <button
                style={fourthRadio === '4' ? { backgroundColor: '#333', color: '#f0f0f0' } : null}
                onClick={() => setFourthRadio('4')}
              >
                {'Organized'}
              </button>
              <button
                style={fourthRadio === '5' ? { backgroundColor: '#333', color: '#f0f0f0' } : null}
                onClick={() => setFourthRadio('5')}
              >
                {'Pristine'}
              </button>
            </div>
          </div>
          <div className={styles.bottomItem}>
            <div className={styles.name}>On average, how much do you exercise every day?</div>
            <div className={styles.radioButtons}>
              <button
                style={fifthRadio === '1' ? { backgroundColor: '#333', color: '#f0f0f0' } : null}
                onClick={() => setFifthRadio('1')}
              >
                {'None'}
              </button>
              <button
                style={fifthRadio === '2' ? { backgroundColor: '#333', color: '#f0f0f0' } : null}
                onClick={() => setFifthRadio('2')}
              >
                {'15 mins'}
              </button>
              <button
                style={fifthRadio === '3' ? { backgroundColor: '#333', color: '#f0f0f0' } : null}
                onClick={() => setFifthRadio('3')}
              >
                {'30 mins'}
              </button>
              <button
                style={fifthRadio === '4' ? { backgroundColor: '#333', color: '#f0f0f0' } : null}
                onClick={() => setFifthRadio('4')}
              >
                {'1 hour'}
              </button>
              <button
                style={fifthRadio === '5' ? { backgroundColor: '#333', color: '#f0f0f0' } : null}
                onClick={() => setFifthRadio('5')}
              >
                {'>1 hour'}
              </button>
            </div>
          </div>
          <div className={styles.bottomItem}>
            <div className={styles.name}>How often do you reflect on your well-being and happiness?</div>
            <div className={styles.radioButtons}>
              <button
                style={sixthRadio === '1' ? { backgroundColor: '#333', color: '#f0f0f0' } : null}
                onClick={() => setSixthRadio('1')}
              >
                {'Never'}
              </button>
              <button
                style={sixthRadio === '2' ? { backgroundColor: '#333', color: '#f0f0f0' } : null}
                onClick={() => setSixthRadio('2')}
              >
                {'Sometimes'}
              </button>
              <button
                style={sixthRadio === '3' ? { backgroundColor: '#333', color: '#f0f0f0' } : null}
                onClick={() => setSixthRadio('3')}
              >
                {'Always'}
              </button>
            </div>
          </div>
          <div className={styles.bottomItem}>
            <div className={styles.name}>Are you in a state of crisis at the moment?</div>
            <div className={styles.radioButtons}>
              <button
                style={seventhRadio === '1' ? { backgroundColor: '#333', color: '#f0f0f0' } : null}
                onClick={() => setSeventhRadio('1')}
              >
                {'No'}
              </button>
              <button
                style={seventhRadio === '2' ? { backgroundColor: '#333', color: '#f0f0f0' } : null}
                onClick={() => setSeventhRadio('2')}
              >
                {'Yes'}
              </button>
            </div>
          </div>
          <div className={styles.bottomItem}>
            <div className={styles.name}>
              Are you experiencing thoughts of self-harm and/or symptoms of severe depression or anxiety?
            </div>
            <div className={styles.radioButtons}>
              <button
                style={eighthRadio === '1' ? { backgroundColor: '#333', color: '#f0f0f0' } : null}
                onClick={() => setEighthRadio('1')}
              >
                {'No'}
              </button>
              <button
                style={eighthRadio === '2' ? { backgroundColor: '#333', color: '#f0f0f0' } : null}
                onClick={() => setEighthRadio('2')}
              >
                {'Yes'}
              </button>
            </div>
          </div>
          <button onClick={() => {
            if (seventhRadio === '2' || eighthRadio === '2') {
              router.push('/resources');
            } else {
              router.push('/');
            }
          }} className={styles.shareButton}>Submit</button>
        </div>
      </Container>
    </>
  );
};

export default Assessment;
