import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <nav className={styles.navbar}>
          <ul className={styles.list}>
            <li className={styles.elem}>Home</li>
            <li className={styles.elem}>Bosses</li>
            <li className={styles.elem}>About</li>
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
