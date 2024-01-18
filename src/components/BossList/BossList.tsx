import BossCard from '../BossCard/BossCard';
import { Boss } from '@/@types';
import styles from './BossList.module.scss';
import { getBossesByName } from '@/api/api';

interface BossListProps {
  query: string;
  sortBy: string;
}

async function BossList({ query, sortBy }: BossListProps) {
  // Fetch all bosses from the API
  const bosses = await getBossesByName(query);

  // // Convert healtPoints value to a number
  // const convertHealthPoints = (value: string | undefined | null): number => {
  //   if (value === undefined || value === null || value === '???') {
  //     return 1;
  //   }
  //   const numericValue = Number(value.replace(/[^0-9.-]+/g, ''));
  //   if (!Number.isNaN(numericValue)) {
  //     return numericValue;
  //   }
  //   return 1;
  // };

  // // Compare healtPoints values
  // const compareHealthPoints = (bossA: Boss, bossB: Boss): number => {
  //   const healthPointsA = convertHealthPoints(bossA.healthPoints);
  //   const healthPointsB = convertHealthPoints(bossB.healthPoints);
  //   return healthPointsA - healthPointsB;
  // };

  // // Sort bosses based on the sorted options
  // const sortBosses = (bossesToSort: Boss[], sortByOption: string): Boss[] => {
  //   switch (sortByOption) {
  //     case 'name.asc':
  //       return bossesToSort
  //         .slice()
  //         .sort((a, b) => a.name.localeCompare(b.name));
  //     case 'name.desc':
  //       return bossesToSort
  //         .slice()
  //         .sort((a, b) => b.name.localeCompare(a.name));
  //     case 'healthpoints.asc':
  //       return bossesToSort.slice().sort((a, b) => compareHealthPoints(a, b));
  //     case 'healthpoints.desc':
  //       return bossesToSort.slice().sort((a, b) => compareHealthPoints(b, a));
  //     default:
  //       return bossesToSort;
  //   }
  // };

  // // Sort and map the bosses for rendering
  // const sortedBosses = sortBosses(bosses, sortBy);
  const allBosses = bosses.map((boss: Boss) => (
    <li className={styles.item} key={boss.id}>
      <BossCard boss={boss} />
    </li>
  ));

  return <ul className={styles.list}>{allBosses}</ul>;
}

export default BossList;
