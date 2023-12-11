// Import Next.js Components
import Image from 'next/image';
import Link from 'next/link';
// Import Types
import { Boss } from '@/@types';
// Import Styles
import styles from './BossesSearchResults.module.scss';

interface BossesSearchResultsProps {
  searchResults: Boss[];
}

function BossesSearchResults({ searchResults }: BossesSearchResultsProps) {
  return (
    <ul className={styles.list}>
      {searchResults.map((boss) => (
        <li key={boss.id}>
          <Link
            className={styles.item}
            href={`/bosses/${boss.id}`}
            onMouseDown={(e) => e.preventDefault()}
          >
            <Image
              width={100}
              height={60}
              src={boss.image ? `${boss.image}` : '/images/default-image.webp'}
              alt={boss.name}
            />
            <p>{boss.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default BossesSearchResults;
