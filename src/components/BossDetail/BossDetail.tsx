import { Boss } from '@/@types';
import styles from './BossDetail.module.scss';

export interface BossDetailProps {
  boss: Boss;
}

function BossDetail({ boss }: BossDetailProps) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h3 className={styles.name}>{boss.name}</h3>
        <p className={styles.description}>Description: </p>
        <p className={styles.Location}>Location : </p>
        <p className={styles.hp}>HP : </p>
        <ul className={styles.drops}>Drops</ul>
      </div>
    </div>
  );
}

export default BossDetail;
