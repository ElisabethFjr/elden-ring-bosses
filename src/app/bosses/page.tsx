// Import Utils
import axiosInstance from '@/utils/axios';
// Import Types
import { Boss } from '@/@types';
// Import Components
import BossCard from '@/components/BossCard/BossCard';
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
  console.log(bosses);

  const allBosses = bosses.map((boss: Boss) => (
    <li className={styles.item} key={boss.id}>
      <BossCard boss={boss} />
    </li>
  ));

  return (
    <div className={styles.bosses}>
      <h1 className={styles.title}>
        <span className={styles.maj}>E</span>
        lden Rin
        <span className={styles.maj}>g</span>
      </h1>
      <h2 className={styles.subtitle}>Bosses</h2>
      <ul className={styles.list}>{allBosses}</ul>
    </div>
  );
}

export default BossesPage;
