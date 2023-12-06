import Image from 'next/image';
import Link from 'next/link';
// import { nanoid } from 'nanoid';
import styles from './BossCard.module.scss';

export interface BossCardProps {
  id: string;
  name: string;
  // image: string;
  description: string;
  location: string;
  healthPoints: string;
  //   drops: string[];
}

function BossCard({
  id,
  name,
  // image,
  description,
  location,
  healthPoints,
}: BossCardProps) {
  // const allDrops = drops.map((drop) => (
  //   <li className="boss-card-drops-item" key={nanoid()}>
  //     {drop}
  //   </li>
  // ));

  return (
    <Link href={`/bosses/${id}`}>
      <article className={styles.card}>
        <div className={styles.image}>
          <Image
            src="https://eldenring.fanapis.com/images/bosses/17f696d979al0i1v1775oof02bi8oh.png"
            alt={name}
            fill
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.description}>{description}</p>
          <p className={styles.location}>Location : {location}</p>
          {/* <ul className="boss-card-drops">Drops</ul> */}
          <p className={styles.healthpoints}>HP {healthPoints}</p>
        </div>
      </article>
    </Link>
  );
}

export default BossCard;
