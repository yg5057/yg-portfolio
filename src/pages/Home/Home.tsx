import Hero from "./Hero";
import About from "./About";
import Project from "./Project";
import Footer from "../../components/Footer/Footer";
import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles.home}>
      <Hero />
      <About />
      <Project />
      <Footer />
    </div>
  );
}

export default Home;
