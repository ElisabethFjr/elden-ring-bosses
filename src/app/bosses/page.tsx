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
      const { data } = await axiosInstance.get('/bosses?limit=106');
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
      <BossCard
        id={boss.id}
        name={boss.name}
        // image={boss.image}
        description={boss.description}
        location={boss.location}
        healthPoints={boss.healthPoints}
        // drops={boss.drops}
      />
    </li>
  ));

  return (
    <div className={styles.bosses}>
      <h1 className={styles.title}>All Bosses</h1>
      <ul className={styles.list}>{allBosses}</ul>
    </div>
  );
}

export default BossesPage;
