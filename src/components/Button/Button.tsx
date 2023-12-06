import styles from './Button.module.scss';

export interface ButtonProps {
  text: string;
}

function Button({ text }: ButtonProps) {
  return (
    <button className={styles.btn} type="button">
      {text}
    </button>
  );
}

export default Button;
