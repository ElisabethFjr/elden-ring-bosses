'use client';

import { useState } from 'react';
import BossList from '../BossList/BossList';
import SearchBar from '../SearchBar/SearchBar';
// import SortByMenu from '../SortByMenu/SortByMenu';
import styles from './BossesContainer.module.scss';

interface BossContainerProps {
  query: string;
}

function BossesContainer({ query }: BossContainerProps) {
  const [sortBy, setSortBy] = useState<string>('name.asc');

  const handleSortChange = (sortByValue: string) => {
    setSortBy(sortByValue);
  };

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <SearchBar />
        {/* <SortByMenu onSortChange={handleSortChange} /> */}
      </div>
      <BossList query={query} sortBy={sortBy} />
    </div>
  );
}

export default BossesContainer;
