'use client';

import Link from 'next/link';
import styles from './Button.module.scss';

export interface ButtonProps {
  text: string;
  href: string;
}

function Button({ text, href }: ButtonProps) {
  return (
    <Link href={href}>
      <button className={styles.btn} type="button">
        {text}
      </button>
    </Link>
  );
}

export default Button;
