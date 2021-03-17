import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import Link from 'next/link';

import '../styles/globals.scss';

import styles from '../styles/Home.module.scss';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    // router.push('/initial-assessment');
  }, []);

  return (
    <>
      <Navbar className={styles.navbar}>
        <div className={styles.navbarContent}>
          <Navbar.Brand className={styles.navbarBrand}>
            <div style={{ userSelect: 'none', pointerEvents: 'none' }}>
              <Image src="/icon.png" alt="Icon" width={25} height={25} />
            </div>
            <span style={{ userSelect: 'none' }}>Celsius</span>
          </Navbar.Brand>
          <Link href={'/'}>
            <a
              className={styles.navbarItem}
              style={router.pathname === '/' ? { fontWeight: '700' } : { fontWeight: '400' }}
            >
              Dashboard
            </a>
          </Link>
          <div style={{ userSelect: 'none' }}>•</div>
          <Link href={'/resources'}>
            <a
              className={styles.navbarItem}
              style={router.pathname === '/resources' ? { fontWeight: '600' } : { fontWeight: '400' }}
            >
              Resources
            </a>
          </Link>
          <div style={{ userSelect: 'none' }}>•</div>
          <Link href={'/history'}>
            <a
              className={styles.navbarItem}
              style={router.pathname === '/history' ? { fontWeight: '600' } : { fontWeight: '400' }}
            >
              History
            </a>
          </Link>
          <div style={{ userSelect: 'none' }}>•</div>
          <Link href={'/leaderboard'}>
            <a
              className={styles.navbarItem}
              style={router.pathname === '/leaderboard' ? { fontWeight: '600' } : { fontWeight: '400' }}
            >
              Leaderboard
            </a>
          </Link>
        </div>
        <div className={styles.profile}>
          <div className={styles.profileText}>
            Welcome, <span>Fırat</span>
          </div>
          <div style={{ userSelect: 'none', pointerEvents: 'none' }}>
            <Image src="/profile.png" alt="Icon" width={30} height={30} />
          </div>
        </div>
      </Navbar>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
