import Head from 'next/head';
import Container from 'react-bootstrap/Container';

import styles from '../../styles/Activities.module.scss';

const Games = () => {
  return (
    <>
      <Head>
        <title>Games – Celsius</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={styles.container}>
        <h1 className={styles.headerText}>Games</h1>
        <h4 className={styles.headerSubtext}>Pick a game below and start playing!</h4>
        <div className={styles.bottom}>
          <a
            href={'https://www.minecraft.net/'}
            className={styles.bottomItemLink}
          >
            <div className={styles.name}>Minecraft</div>
            <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#888' }}>VIEW GAME</div>
          </a>
          <a
            href={'https://starcraft2.com/'}
            className={styles.bottomItemLink}
          >
            <div className={styles.name}>Starcraft</div>
            <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#888' }}>VIEW GAME</div>
          </a>
          <a
            href={'https://worldofwarcraft.com/'}
            className={styles.bottomItemLink}
          >
            <div className={styles.name}>World of Warcraft</div>
            <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#888' }}>VIEW GAME</div>
          </a>
          <a
            href={'https://www.rocketleague.com/'}
            className={styles.bottomItemLink}
          >
            <div className={styles.name}>Rocket League</div>
            <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#888' }}>VIEW GAME</div>
          </a>
          <a
            href={'https://www.playvalorant.com/'}
            className={styles.bottomItemLink}
          >
            <div className={styles.name}>Valorant</div>
            <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#888' }}>VIEW GAME</div>
          </a>
          <a
            href={'https://www.playvalorant.com/'}
            className={styles.bottomItemLink}
          >
            <div className={styles.name}>Overcooked</div>
            <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#888' }}>VIEW GAME</div>
          </a>
          <a
            href={'https://store.steampowered.com/app/996770/Moving_Out/'}
            className={styles.bottomItemLink}
          >
            <div className={styles.name}>Moving Out</div>
            <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#888' }}>VIEW GAME</div>
          </a>
          <a
            href={'https://store.steampowered.com/app/945360/Among_Us/'}
            className={styles.bottomItemLink}
          >
            <div className={styles.name}>Among Us</div>
            <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#888' }}>VIEW GAME</div>
          </a>
          <a
            href={'https://na.leagueoflegends.com/en-us/'}
            className={styles.bottomItemLink}
          >
            <div className={styles.name}>League of Legends</div>
            <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#888' }}>VIEW GAME</div>
          </a>
          <a
            href={'https://www.nintendo.com/games/detail/mario-kart-8-deluxe-switch/'}
            className={styles.bottomItemLink}
          >
            <div className={styles.name}>Mario Kart 8</div>
            <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#888' }}>VIEW GAME</div>
          </a>
          <a
            href={'https://www.pubg.com/'}
            className={styles.bottomItemLink}
          >
            <div className={styles.name}>PUBG</div>
            <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#888' }}>VIEW GAME</div>
          </a>
        </div>
      </Container>
    </>
  );
};

export default Games;
