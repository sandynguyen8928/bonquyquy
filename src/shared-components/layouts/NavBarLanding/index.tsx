import { useNavigate } from "react-router-dom";

import styles from "./NavBarLanding.module.scss";
import NavBarLandingMobile from "../NavBarLandingMobile";

const NavBarLanding = () => {
  const navigate = useNavigate();

  function navigateTo(page: string) {
    navigate(page);
  }

  return (
    <div className={styles["navbar-switch"]}>
      <div className={styles["navbar-styled"]}>
        <div className={styles["nav-left"]}>
          <div className={styles["nav-item"]} onClick={() => navigateTo("/merch")}>
            MERCH
          </div>
          <div className={styles["nav-item"]} onClick={() => navigateTo("/tattoos")}>
            TATTOOS
          </div>
          <div className={styles["nav-item"]} onClick={() => navigateTo("/about")}>
            ABOUT
          </div>
        </div>
        <div className={styles["nav-right"]}>
          <div className={styles["nav-item"]}>
            <a href="https://www.instagram.com/bon_quyquy/" target="_blank" rel="noopener noreferrer">
              CONTACT
            </a>
          </div>
          <div className={styles["nav-item"]} onClick={() => navigateTo("/cart")}>
            CART
          </div>
        </div>
      </div>
      <div className={styles["navbar-mobile"]}>
        <NavBarLandingMobile />
      </div>
    </div>
  );
};

export default NavBarLanding;
