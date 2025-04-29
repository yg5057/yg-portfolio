import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2025 yg5057@github.com. All rights reserved.</p>
      <p>React, Type Script, SCSS 기반으로 제작된 사이트입니다.</p>
    </footer>
  );
}

export default Footer;
