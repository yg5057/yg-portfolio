import Header from "../../components/Header/Header";
import Hero from "./Hero";
import About from "./About";
import Project from "./Project";
import Footer from "../../components/Footer/Footer";
import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <main>
        <Hero />
        <About />
        <Project />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
