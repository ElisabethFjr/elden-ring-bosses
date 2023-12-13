'use client';

import { useState } from 'react';
import BossList from '../BossList/BossList';
import SearchBar from '../SearchBar/SearchBar';
import SortByMenu from '../SortByMenu/SortByMenu';
import { Boss } from '@/@types';
import styles from './BossesContainer.module.scss';

interface BossesContainerProps {
  bosses: Boss[];
}

function BossesContainer({ bosses }: BossesContainerProps) {
  const [sortBy, setSortBy] = useState<string>('name.asc');

  const handleSortChange = (sortByValue: string) => {
    setSortBy(sortByValue);
  };

  return (
    <>
      <div className={styles.search}>
        <SearchBar />
        <SortByMenu onSortChange={handleSortChange} />
      </div>
      <BossList bosses={bosses} sortBy={sortBy} />
    </>
  );
}

export default BossesContainer;
