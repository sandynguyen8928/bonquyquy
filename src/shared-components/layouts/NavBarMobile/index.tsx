import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./NavBarMobile.module.scss";
import logo from "../../../assets/logo.png";

const NavBarMobile = () => {
  const navigate = useNavigate();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  function navigateTo(page: string) {
    navigate(page);
    toggleHamburger();
  }

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
    const xButton = document.getElementById("x-button")!;
    const hamburger = document.getElementById("hamburger")!;
    const navBarShow = document.getElementById("navbarshow")!;
    const navBarHeader = document.getElementById("navbarheader")!;

    if (hamburgerOpen) {
      xButton.style.display = "flex";
      hamburger.style.display = "none";
      navBarShow.style.display = "flex";
      navBarHeader.style.backdropFilter = "blur(20px)";
    } else {
      xButton.style.display = "none";
      hamburger.style.display = "flex";
      navBarShow.style.display = "none";
      navBarHeader.style.backdropFilter = "none";
    }
  };

  const showTattoos = () => {
    const flashes = document.getElementById("flashes")!;
    const wants = document.getElementById("wants")!;

    if (flashes.style.display == "flex") {
      flashes.style.display = "none";
      wants.style.display = "none";
    } else {
      flashes.style.display = "flex";
      wants.style.display = "flex";
    }
  };

  const showAbout = () => {
    const quy = document.getElementById("quy")!;
    const order = document.getElementById("order")!;

    if (quy.style.display == "flex") {
      quy.style.display = "none";
      order.style.display = "none";
    } else {
      quy.style.display = "flex";
      order.style.display = "flex";
    }
  };

  useEffect(() => {
    toggleHamburger();
  }, []);

  return (
    <div className={styles["navbar-mobile-styled"]}>
      <div className={styles["navbar-mobile-header"]} id="navbarheader">
        <div className={styles["hamburger"]} onClick={toggleHamburger} id="hamburger">
          <div className={styles["burger"]} />
          <div className={styles["burger"]} />
          <div className={styles["burger"]} />
        </div>
        <div className={styles["x-button"]} onClick={toggleHamburger} id="x-button" />
        <img
          src={logo}
          className={styles["navbar-logo"]}
          alt="bonquyquy logo"
          onClick={() => navigateTo("/")}
        />
        <div className={styles["cart"]} onClick={() => navigateTo("/cart")}>
          <div>CART</div>
        </div>
      </div>
      <div className={styles["navbar-blur-background"]} id="navbarshow">
        <div className={styles["navbar-mobile-items-container"]}>
          <div className={styles["navbar-mobile-item"]} onClick={() => navigateTo("/merch")}>
            MERCH
          </div>
          <div className={styles["navbar-mobile-item"]} onClick={showTattoos}>
            TATTOO
          </div>
          <div className={styles["navbar-mobile-subitem"]} onClick={() => navigateTo("/tattoo")} id="flashes">
            FLASHES
          </div>
          <div className={styles["navbar-mobile-subitem"]} onClick={() => navigateTo("/tattoo")} id="wants">
            WANT TO DO
          </div>
          <div className={styles["navbar-mobile-item"]} onClick={showAbout}>
            ABOUT
          </div>
          <div className={styles["navbar-mobile-subitem"]} onClick={() => navigateTo("/about")} id="quy">
            QUY
          </div>
          <div className={styles["navbar-mobile-subitem"]} onClick={() => navigateTo("/about")} id="order">
            ORDER
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBarMobile;
