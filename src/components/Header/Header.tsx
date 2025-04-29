import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1 className={styles.logo}>Choi Ji Eun</h1>
        <nav className={styles.nav}>
          <Link to="/">Home</Link>
          <a href="#about">About</a>
          <a href="#project">Project</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
