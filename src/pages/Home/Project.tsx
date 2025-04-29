import styles from "./Project.module.scss";

function Project() {
  return (
    <section id="project" className={styles.project} data-aos="fade-up">
      <h2>Projects</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>샘플1</h3>
          <p>샘플1 설명입니다.</p>
        </div>
        <div className={styles.card}>
          <h3>샘플2</h3>
          <p>샘플2 설명입니다.</p>
        </div>
        <div className={styles.card}>
          <h3>샘플3</h3>
          <p>샘플3 설명입니다.</p>
        </div>
      </div>
    </section>
  );
}

export default Project;
