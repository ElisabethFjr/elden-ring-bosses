'use client';

import DOMPurify from 'dompurify';
import { ChangeEvent, useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import axiosInstance from '@/utils/axios';
import { Boss } from '@/@types';
import BossesSearchResults from './BossesSearchResults/BossesSearchResults';
import styles from './SearchBar.module.scss';

function SearchBar() {
  const [searchResults, setSearchResults] = useState<Boss[]>([]);
  const [hasFocus, setHasFocus] = useState(false);

  const searchBosses = async (query: string) => {
    try {
      if (!query.trim()) {
        setSearchResults([]); // Reset Results
        return;
      }
      const { data } = await axiosInstance.get(`/bosses?name=${query}`);
      setSearchResults(data.data);
    } catch (error) {
      console.error('Failed fetching bosses:', error);
      throw new Error();
    }
  };

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
