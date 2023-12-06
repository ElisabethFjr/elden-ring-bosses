// Import Components
import Button from '@/components/Button/Button';
// Import Styles
import styles from './page.module.scss';

async function Home() {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>
        <span className={styles.maj}>E</span>
        lden Rin
        <span className={styles.maj}>g</span>
      </h1>
      <h2 className={styles.subtitle}>
        Journey through the Lands Between and discover all bosses from the
        renowned FromSoftware&apos;s video game.
      </h2>
      <Button text="All Bosses" />
    </div>
  );
}

export default Home;
