import styles from "./Hero.module.scss";

function Hero() {
  return (
    <section className={styles.hero}>
      <h2>프론트엔드 개발자</h2>
      <h1>조연경</h1>
      <div className={styles.buttons}>
        <a href="#about">About</a>
        <a href="#project">Project</a>
      </div>
    </section>
  );
}

export default Hero;
