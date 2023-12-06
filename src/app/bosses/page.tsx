import BossCard from '@/components/BossCard/BossCard';
import styles from './BossesPage.module.scss';

function BossesPage() {
  return (
    <section className={styles.bosses}>
      <div className={styles.container}>
        <BossCard />
      </div>
    </section>
  );
}

export default BossesPage;
