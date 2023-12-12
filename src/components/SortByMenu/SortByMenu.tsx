'use client';

import { useState } from 'react';
import styles from './SortByMenu.module.scss';

function SortByMenu() {
  const options = [
    { label: 'Name : A-Z', value: 'name.asc' },
    { label: 'Name : Z-A', value: 'name.desc' },
    { label: 'HP : Asc', value: 'healthpoints.asc' },
    { label: 'HP : Desc', value: 'healthpoints.desc' },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>('name.asc');

  const handleButtonClick = (optionValue: string) => {
    setSelectedOption(optionValue);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.wrapper}>
      <button
        className={`${styles.toggleButton} ${
          isDropdownOpen && styles.dropdownOpen
        }`}
        onClick={toggleDropdown}
        type="button"
      >
        Sort By
      </button>
      {isDropdownOpen && (
        <div className={styles.menu}>
          {options.map((option) => (
            <button
              key={option.value}
              className={`${styles.option} ${
                selectedOption === option.value && styles.selected
              }`}
              type="button"
              onClick={() => handleButtonClick(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default SortByMenu;
