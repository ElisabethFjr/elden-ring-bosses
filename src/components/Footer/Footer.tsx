import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        All visual elements are protected by
        <a href="https://www.fromsoftware.jp/ww/"> From Software</a>
        &apos;s copyright.
      </p>
      <p>Made with Love by Elisabeth, French developer.</p>
    </footer>
  );
}

export default Footer;
