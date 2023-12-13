'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './SortByMenu.module.scss';

interface SortByMenuProps {
  // eslint-disable-next-line no-unused-vars
  onSortChange: (optionValue: string) => void;
}

function SortByMenu({ onSortChange }: SortByMenuProps) {
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
    onSortChange(optionValue);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (menuRef.current && isDropdownOpen) {
        if (!menuRef.current.contains(event.target as Node)) {
          setIsDropdownOpen(false);
        }
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleDocumentClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, [isDropdownOpen]);

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
        <div className={styles.menu} ref={menuRef}>
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
