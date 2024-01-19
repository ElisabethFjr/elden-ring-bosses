'use client';

// Import React Hooks
import { ChangeEvent, useState } from 'react';
// import Next Hooks
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
// Import Third-Party Modules
import DOMPurify from 'dompurify';
import { useDebouncedCallback } from 'use-debounce';
// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// Import Styles
import styles from './SearchBar.module.scss';

function SearchBar() {
  const [hasFocus, setHasFocus] = useState(false);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const searchBosses = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);

    // Reset page number to 1
    params.set('page', '1');
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  // Handler for input change events
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = DOMPurify.sanitize(event.target.value);
    searchBosses(sanitizedValue);
  };

  return (
    <form className={styles.searchBar}>
      <label htmlFor="searchInput" className={styles.label}>
        Search
      </label>
      <input
        id="searchInput"
        className={styles.input}
        minLength={2}
        onChange={handleChange}
        placeholder="Search..."
        onBlurCapture={() => setHasFocus(false)}
        onFocus={() => setHasFocus(true)}
      />
      <button
        className={styles.btn}
        type="button"
        aria-label="Search"
        title="Search"
      >
        <FontAwesomeIcon className={styles.icon} icon={faMagnifyingGlass} />
      </button>
    </form>
  );
}

export default SearchBar;
