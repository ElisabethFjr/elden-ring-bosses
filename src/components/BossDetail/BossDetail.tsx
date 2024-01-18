import Image from 'next/image';
import { nanoid } from 'nanoid';
import { Boss } from '@/@types';
import styles from './BossDetail.module.scss';
import BackButton from '../BackButton/BackButton';

export interface BossDetailProps {
  boss: Boss;
}

function BossDetail({ boss }: BossDetailProps) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h3 className={styles.name}>{boss.name}</h3>
        <Image
          src={boss.image ? `${boss.image}` : '/images/elden-ring.png'}
          alt={boss.name}
          width={300}
          height={170}
          style={{ objectFit: 'cover', objectPosition: 'top' }}
          priority
        />
        <p className={styles.description}>
          <span className={styles.color}>Description : </span>
          {boss.description}
        </p>
        <p className={styles.Location}>
          <span className={styles.color}>Location : </span>
          {boss.location}
        </p>
        <p className={styles.hp}>
          <span className={styles.color}>HP : </span>
          {boss.healthPoints}
        </p>
        <div className={styles.drops}>
          <span className={styles.color}>Drops : </span>
          <ul>
            {boss.drops.map((drop) => (
              <li key={nanoid()}>{drop}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BossDetail;
