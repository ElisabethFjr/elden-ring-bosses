import BossList from '../BossList/BossList';
import SearchBar from '../SearchBar/SearchBar';
import styles from './BossesContainer.module.scss';
import Pagination from '../Pagination/Pagination';

interface BossContainerProps {
  query: string;
  currentPage: number;
}

function BossesContainer({ query, currentPage }: BossContainerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <SearchBar />
      </div>
      <BossList query={query} currentPage={currentPage} />
      <div className={styles.pagination}>
        <Pagination />
      </div>
    </div>
  );
}

export default BossesContainer;
