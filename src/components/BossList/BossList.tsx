import BossCard from '../BossCard/BossCard';
import { Boss } from '@/@types';
import styles from './BossList.module.scss';
import { getAllBosses, getFilteredBosses } from '@/api/api';

interface BossListProps {
  query: string;
  currentPage: number;
}

async function BossList({ query, currentPage }: BossListProps) {
  const itemsPerPage = 6;
  // Fetch all bosses from the API
  const bosses = await getFilteredBosses(query, currentPage, itemsPerPage);

  // const sortedBosses = sortBosses(bosses, sortBy);
  const allBosses = bosses.map((boss: Boss) => (
    <li className={styles.item} key={boss.id}>
      <BossCard boss={boss} />
    </li>
  ));

  return <ul className={styles.list}>{allBosses}</ul>;
}

export default BossList;
