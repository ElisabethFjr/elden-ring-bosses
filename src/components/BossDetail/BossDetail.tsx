import { Boss } from '@/@types';
import styles from './BossDetail.module.scss';

export interface BossDetailProps {
  boss: Boss;
}

function BossDetail({ boss }: BossDetailProps) {
  return (
    <div className={styles.container}>
      <h3>{boss.name}</h3>
      <p>Description: </p>
      <p>Location : </p>
      <p>HP : </p>
      <ul>Drops</ul>
    </div>
  );
}

export default BossDetail;
