import React from 'react';
import Surfer from './assets/surfer_screenshot.png';
import Anime from './assets/anime-tracker-splash.png';
import Codemates from './assets/codemates-landing.png';

const styles = {
    h1: {
        color: '#a2d2ff',
        marginTop: '2cm',
        marginLeft: '2cm',
    },
    card: {
        width: '20rem',
    },
    img: {
        width: 300,
        height: 200,
        marginLeft: '9px',
        marginTop: '6px',
    },
    p: {
        color: '#bde0fe',
    },
};


const Portfolio = () => {
    return (
        <div>
            <h1 style={styles.h1}>Projects</h1>
            <div class="card card1" style={styles.card}>
                <img src={Surfer} class="card-img-top" alt="surfer screenshot" style={styles.img}></img>
                <div class="card-body">
                    <a href="https://mariayconstanza.github.io/beach-day/">
                        <p class="card-text" styles={styles.p}>HTML/CSS/JavaScript Project: 1 WOW||Work Over Waves</p>
                    </a>
                </div>
            </div>
            <div class="card card2" style={styles.card}>
                <img src={Anime} class="card-img-top" alt="anime screenshot" style={styles.img}></img>
                <div class="card-body">
                    <a href="https://anime-tracker-11-2022.herokuapp.com/">
                        <p class="card-text" styles={styles.p}>NodeJS/MySQL/Express Project: 2 Anime Tracker</p>
                    </a>
                </div>
            </div>
            <div class="card card3" style={styles.card}>
                <img src={Codemates} class="card-img-top" alt="codemates screenshot" style={styles.img}></img>
                <div class="card-body">
                    <a href="https://codemates-app.herokuapp.com/">
                        <p class="card-text" styles={styles.p}>MERN/ReactJS/State Project: 3 Codemates</p>
                    </a>
                </div>
            </div>
        </div>
    );
};


export default Portfolio;