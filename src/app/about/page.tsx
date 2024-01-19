import PageLayout from '@/components/PageLayout/PageLayout';
import styles from './page.module.scss';
import BackButton from '@/components/BackButton/BackButton';

function AboutPage() {
  return (
    <PageLayout subtitle="About">
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h3>Hello there, I&apos;m Elisabeth FAUJOUR.</h3>
          <p>
            I&apos;m a passionate web developer who recently started my journey
            in the world of web development. To upgrade my skills with Next.js,
            and I create this project related to one of my favorite video games,
            Elden Ring.
          </p>
          <p>
            Elden Ring is a game that holds a special place in my heart, and
            I&apos;ve decided to create a website listing all the bosses you can
            find in the game. All data is sourced from the
            <a href="https://eldenring.fanapis.com/">Elden Ring API</a>.
          </p>
          <p>
            Thank you for visiting and exploring the Elden Ring Bosses website.
            May your journeys in the game be filled with triumphs and epic
            encounters!
          </p>
        </div>
      </div>
      <BackButton />
    </PageLayout>
  );
}

export default AboutPage;
