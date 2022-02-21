import React from 'react';
import styles from './header.module.scss';

export function Header() {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>

          <figure className={styles.nav__figure}>
            <img src="./img/monsterArt.jpg" alt="logo" />
          </figure>

          <ul className={styles.nav__list}>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>

        </nav>
      </header>
    </section>
  );
}
