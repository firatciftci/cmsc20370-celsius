import Head from 'next/head';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image from 'next/image';

import styles from '../../styles/History.module.scss';

const History = () => {
  return (
    <>
      <Head>
        <title>History – Celsius</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar bg="light">
        <Navbar.Brand href="#home">
          <div className="d-inline-block align-top">
            <Image src="/icon.svg" alt="Icon" width={30} height={30} />
          </div>
          Celsius
        </Navbar.Brand>
      </Navbar>
      <Container>
        <h1 className={styles.headerText}>History</h1>
        <h4 className={styles.headerSubtext}>Check out your progress</h4>
        <div className={styles.content}>
          <div className={styles.left}>
            <div>daily chart</div>
          </div>
          <div className={styles.right}>
            <div>list</div>
          </div>
          <div className={styles.bottom}>
            <div>weekly chart</div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default History;
