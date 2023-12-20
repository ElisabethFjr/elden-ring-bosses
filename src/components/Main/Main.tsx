import React from 'react';
import styles from './Main.module.scss';

interface MainProps {
  children: React.ReactNode;
}

function Main({ children }: MainProps) {
  return <main className={styles.main}>{children}</main>;
}

export default Main;
