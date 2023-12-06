import BossCard from '@/components/BossCard/BossCard';
import styles from './BossesPage.module.scss';

function BossesPage() {
  return (
    <div className={styles.bosses}>
      <h1>All Bosses</h1>
      <BossCard />
    </div>
  );
}

export default BossesPage;
