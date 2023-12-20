import { nanoid } from 'nanoid';
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
        <p className={styles.description}>Description: {boss.description}</p>
        <p className={styles.Location}>Location : {boss.location}</p>
        <p className={styles.hp}>HP : {boss.healthPoints}</p>
        <p className={styles.drops}>
          Drops :
          <ul>
            {boss.drops.map((drop) => (
              <li key={nanoid()}>{drop}</li>
            ))}
          </ul>
        </p>
      </div>
    </div>
  );
}

export default BossDetail;
