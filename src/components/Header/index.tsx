import React from 'react';
import { SignInButton } from '../SignInButton';

import styles from './styles.module.scss';
import { ActiveLink } from '../ActiveLink';

export function Header() {

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="IGnews"/>
        <nav>
          <ActiveLink activeClassname={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassname={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
