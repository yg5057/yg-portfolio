import { useEffect, useState } from "react";
import styles from "./Header.module.scss";

function Header() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollY(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrollY > 5 ? styles.active : ""}`}>
      <div className={styles.inner}>
        <h1 className={styles.logo}>Odeng.dev</h1>
        <nav className={styles.nav}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={styles.link}
          >
            Home
          </a>
          <a href="#about" className={styles.link}>
            About
          </a>
          <a href="#project" className={styles.link}>
            Project
          </a>
        </nav>
      </div>
      <div className={styles.progress} style={{ width: `${scrollY}%` }} />
    </header>
  );
}

export default Header;
