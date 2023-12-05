// Import Utils
import axiosInstance from '@/utils/axios';
// Import Types
import { Boss } from '@/@types';
// Import Components
import BossCard from '@/components/BossCard/BossCard';
// Import Styles
import styles from './page.module.scss';

// const getAllBosses = async () => {
//   try {
//     const { data } = await axiosInstance.get('/bosses?limit=106');
//     return data.data;
//   } catch (error) {
//     console.error('Failed fetching bosses:', error);
//     throw new Error();
//   }
// };

async function Home() {
  // const bosses = await getAllBosses();

  // const allBosses = bosses.map((boss: Boss) => (
  //   <li className="bosses-list-item" key={boss.id}>
  //     <BossCard
  //       name={boss.name}
  //       image={boss.image}
  //       description={boss.description}
  //       location={boss.location}
  //       // drops={boss.drops}
  //       healthPoints={boss.healthPoints}
  //     />
  //   </li>
  // ));

  return (
    <>
      <section className={styles.home}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            <span className={styles.maj}>E</span>
            lden Rin
            <span className={styles.maj}>g</span>
          </h1>
          <h2 className={styles.subtitle}>
            Journey through the Lands Between and discover all bosses from the
            renowned FromSoftware&apos;s video game.
          </h2>
          <button className={styles.btn} type="button">
            All Bosses
          </button>
        </div>
      </section>
      <section className={styles.bosses}>
        <div className={styles.container}>
          <BossCard />
        </div>
      </section>
    </>
  );
}

export default Home;
