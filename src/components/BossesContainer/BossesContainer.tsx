import BossList from '../BossList/BossList';
import SearchBar from '../SearchBar/SearchBar';
import styles from './BossesContainer.module.scss';
import Pagination from '../Pagination/Pagination';
import { getFilteredBosses, getNbOfFileteredBosses } from '@/api/api';

interface BossContainerProps {
  query: string;
  currentPage: number;
}

async function BossesContainer({ query, currentPage }: BossContainerProps) {
  const itemsPerPage = 6;
  // Fetch all bosses from the API
  const { bosses } = await getFilteredBosses(query, currentPage, itemsPerPage);
  // Fetch the number of bosses found with the query (use for pagination)
  const { totalBosses } = await getNbOfFileteredBosses(query);

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <SearchBar />
      </div>
      <BossList bosses={bosses} />
      <div className={styles.pagination}>
        <Pagination totalBosses={totalBosses} />
      </div>
    </div>
  );
}

export default BossesContainer;
