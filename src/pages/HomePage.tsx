import IntroductionHeader from "../components/IntroductionHeader/IntroductionHeader";
import Projects from "../components/Projects/Projects";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div>
      <div>
        <IntroductionHeader />
      </div>
      <div className={styles.projects}>
        <Projects />
      </div>
    </div>
  );
}

export default HomePage;
