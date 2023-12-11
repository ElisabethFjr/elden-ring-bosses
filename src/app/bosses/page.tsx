// Import Utils
import axiosInstance from '@/utils/axios';
// Import Components
import SearchBar from '@/components/SearchBar/SearchBar';
import BossList from '@/components/BossList/BossList';
// Import Styles
import styles from './BossesPage.module.scss';

async function BossesPage() {
  const getAllBosses = async () => {
    try {
      const { data } = await axiosInstance.get('/bosses?limit=9&page=1');
      return data.data;
    } catch (error) {
      console.error('Failed fetching bosses:', error);
      throw new Error();
    }
  };

  const bosses = await getAllBosses();

  return (
    <div className={styles.bosses}>
      <h1 className={styles.title}>
        <span className={styles.maj}>E</span>
        lden Rin
        <span className={styles.maj}>g</span>
      </h1>
      <h2 className={styles.subtitle}>Bosses</h2>
      <SearchBar />
      <BossList bosses={bosses} />
    </div>
  );
}

export default BossesPage;
