import Image from 'next/image';
import Link from 'next/link';
import { Boss } from '@/@types';
import styles from './BossCard.module.scss';

export interface BossCardProps {
  boss: Boss;
}

function BossCard({ boss }: BossCardProps) {
  console.log(boss.image);

  return (
    <Link href={`/bosses/${boss.id}`}>
      <article className={styles.card}>
        <div className={styles.image}>
          <Image
            src="https://eldenring.fanapis.com/images/bosses/17f696d979al0i1v1775oof02bi8oh.png"
            alt={boss.name}
            fill
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.name}>{boss.name}</h2>
          <p className={styles.description}>{boss.description}</p>
        </div>
        <div className={styles.overlay}>
          <button type="button" className={styles.btn}>
            See More
          </button>
        </div>
      </article>
    </Link>
  );
}

export default BossCard;
