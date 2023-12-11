'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from './SearchBar.module.scss';

function SearchBar() {
  return (
    <form className={styles.searchBar}>
      <input className={styles.input} type="text" placeholder="Search..." />
      <button className={styles.btn} type="button">
        <FontAwesomeIcon className={styles.icon} icon={faMagnifyingGlass} />
      </button>
    </form>
  );
}

export default SearchBar;
