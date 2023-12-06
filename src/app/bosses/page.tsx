import BossCard from '@/components/BossCard/BossCard';
import styles from './BossesPage.module.scss';

function BossesPage() {
  return (
    <div className={styles.bosses}>
      <BossCard />
    </div>
  );
}

export default BossesPage;
