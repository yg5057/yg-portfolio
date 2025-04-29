import styles from "./About.module.scss";

function About() {
  return (
    <section id="about" className={styles.about} data-aos="fade-up">
      <h2>About Me</h2>
      <p>프론트엔드 개발자 조연경입니다.</p>
      <ul>
        <li>✨ React / TypeScript / Vite</li>
        <li>🎨 SCSS</li>
        <li>🚀 빠른 학습과 성장</li>
      </ul>
    </section>
  );
}

export default About;
