import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <nav className={styles.navbar}>
          <ul className={styles.list}>
            <li className={styles.elem}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.elem}>
              <Link href="/bosses">Bosses</Link>
            </li>
            <li className={styles.elem}>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
      <button className={styles.btn} type="button">
        <FontAwesomeIcon className={styles.icon} icon={faMagnifyingGlass} />
      </button>
    </header>
  );
}

export default Header;
