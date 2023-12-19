import React from 'react';

import styles from './PageLayout.module.scss';

export interface PageLayoutProps {
  children: React.ReactNode;
  subtitle: string;
}

function PageLayout({ children, subtitle }: PageLayoutProps) {
  return (
    <div className={styles.layout}>
      <h1 className={styles.title}>
        <span className={styles.maj}>E</span>
        lden Rin
        <span className={styles.maj}>g</span>
      </h1>
      <h2 className={styles.subtitle}>{subtitle}</h2>
      {children}
    </div>
  );
}

export default PageLayout;
