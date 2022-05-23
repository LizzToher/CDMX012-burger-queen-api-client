import React from 'react';
/*import NavBar from '../components/Navbar';*/
import logoNav from '../assets/logo-nav_small.png';
import styles from './Home.module.css';

function Home() {
  return (
      
    <header className={styles.header}>
        <section>
        <img src={logoNav} alt='logo Burger Queen'></img>
        <p>Admin</p>
        <input type='button'>Trabajadores</input>
        <input type='button'>Productos</input>
        {/*<NavBar />*/}
        </section>
    </header>
    
  );
}

export default Home;