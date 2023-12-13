import Image from 'next/image';
import Link from 'next/link';
import { Boss } from '@/@types';
import styles from './BossCard.module.scss';

export interface BossCardProps {
  boss: Boss;
}

function BossCard({ boss }: BossCardProps) {
  return (
    <Link href={`/bosses/${boss.id}`}>
      <article className={styles.card}>
        <div className={styles.image}>
          <Image
            src={boss.image ? `${boss.image}` : '/images/elden-ring.png'}
            alt={boss.name}
            width={300}
            height={170}
            style={{ objectFit: 'cover', objectPosition: 'top' }}
            priority
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.name}>{boss.name}</h2>
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
