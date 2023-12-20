'use client';

// Import React Hooks
import { ChangeEvent, useState } from 'react';
// Import Third-Party Modules
import DOMPurify from 'dompurify';
import { DebounceInput } from 'react-debounce-input';
// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// Import Utils
import axiosInstance from '@/utils/axios';
// Import Types
import { Boss } from '@/@types';
// Import Components
import BossesSearchResults from './BossesSearchResults/BossesSearchResults';
// Import Styles
import styles from './SearchBar.module.scss';

function SearchBar() {
  const [searchResults, setSearchResults] = useState<Boss[]>([]);
  const [hasFocus, setHasFocus] = useState(false);

  const searchBosses = async (query: string) => {
    try {
      // If input empty or contains whitespaces, reset all results
      if (!query.trim()) {
        setSearchResults([]);
        return;
      }
      // Fetch all Bosses depending on query name
      const { data } = await axiosInstance.get(`/bosses?name=${query}`);
      // Update search results with data
      setSearchResults(data.data);
    } catch (error) {
      console.error('Failed fetching bosses:', error);
      throw new Error();
    }
  };

  // Handler for input change events
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = DOMPurify.sanitize(event.target.value);
    searchBosses(sanitizedValue);
  };

  return (
    <form className={styles.searchBar}>
      <DebounceInput
        className={styles.input}
        minLength={2}
        debounceTimeout={500}
        onChange={handleChange}
        placeholder="Search..."
        onBlurCapture={() => setHasFocus(false)}
        onFocus={() => setHasFocus(true)}
      />
      <button className={styles.btn} type="button">
        <FontAwesomeIcon className={styles.icon} icon={faMagnifyingGlass} />
      </button>
      {searchResults.length > 0 && hasFocus && (
        <BossesSearchResults searchResults={searchResults} />
      )}
    </form>
  );
}

export default SearchBar;
