import Link from 'next/link';
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
    </header>
  );
}

export default Header;
