import BossCard from '../BossCard/BossCard';
import { Boss } from '@/@types';
import styles from './BossList.module.scss';

interface BossListProps {
  bosses: Boss[];
}

function BossList({ bosses }: BossListProps) {
  const allBosses = bosses.map((boss: Boss) => (
    <li className={styles.item} key={boss.id}>
      <BossCard boss={boss} />
    </li>
  ));

  return <ul className={styles.list}>{allBosses}</ul>;
}

export default BossList;
