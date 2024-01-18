'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import styles from './Pagination.module.scss';

function Pagination() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  // Function to create a new URL with the 'page' params
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  // Function to generate the pagination pattern
  const generatePagination = (page: number, totalPages: number) => {
    // If the total number of pages is 5 or less, display all pages without any ellipsis.
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    // If the current page is among the first 3 pages
    else if (currentPage <= 2) {
      return [1, 2, 3, '...', totalPages];
    }
    // If the current page is among the last 2 pages
    else if (currentPage >= totalPages - 2) {
      return [1, '...', totalPages - 2, totalPages - 1, totalPages];
    }

    // If the current page is in the middle
    return [1, '...', page - 1, page, page + 1, '...', totalPages];
  };

  const allPages = generatePagination(currentPage, 18);

  return (
    <div className={styles.pagination}>
      {allPages.map((page, index) =>
        page === '...' ? (
          <div
            key={index}
            className={clsx(styles.item, {
              [styles.ellipsis]: page === '...',
            })}
          >
            {page}
          </div>
        ) : (
          <Link key={index} href={createPageURL(page)}>
            <div
              className={clsx(styles.item, {
                [styles.currentPage]: page === currentPage,
              })}
            >
              {page}
            </div>
          </Link>
        )
      )}
    </div>
  );
}

export default Pagination;
