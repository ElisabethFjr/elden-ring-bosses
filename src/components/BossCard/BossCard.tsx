import Image from 'next/image';
import Link from 'next/link';
// import { nanoid } from 'nanoid';
import styles from './BossCard.module.scss';

export interface BossCardProps {
  id: number;
  //   name: string;
  //   image: string;
  //   region: string;
  //   description: string;
  //   location: string;
  //   drops: string[];
  //   healthPoints: string;
}

function BossCard({ id }: BossCardProps) {
  // const allDrops = drops.map((drop) => (
  //   <li className="boss-card-drops-item" key={nanoid()}>
  //     {drop}
  //   </li>
  // ));

  // // console.log(allDrops);

  return (
    <Link href={`/bosses/${id}`}>
      <article className={styles.card}>
        <div className={styles.image}>
          <Image
            src="https://eldenring.fanapis.com/images/bosses/17f696d979al0i1v1775oof02bi8oh.png"
            alt="Rykard"
            fill
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.name}>Rykard, Lord Of Blasphemy</h2>
          <p className={styles.description}>
            Join the Serpent King, as family... Together, we will devour the
            very gods!
          </p>
          <p className={styles.location}>Mt. Gelmir</p>
          {/* <ul className="boss-card-drops">Drops</ul> */}
          <p className={styles.healthpoints}>1000000</p>
        </div>
      </article>
    </Link>
  );
}

export default BossCard;
