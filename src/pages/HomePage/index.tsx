import styles from "./HomePage.module.scss";
import logo from "../../assets/logo_temp.png";
import NavBar from "../../shared-components/layouts/NavBarLanding";

const HomePage = () => {
  return (
    <div className={styles["landing-styled"]}>
      <NavBar />
      <div className={styles["landing-logo"]}>
        <img src={logo} alt="bonquyquy logo" />
      </div>
    </div>
  );
};

export default HomePage;
