import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./NavBarLandingMobile.module.scss";

const NavBarLandingMobile = () => {
  const navigate = useNavigate();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const navigateTo = (page: string) => {
    navigate(page);
    toggleHamburger();
  };

  const toggleHamburger = () => {
    setHamburgerOpen((prev) => !prev);
  };

  useEffect(() => {
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
  }, [hamburgerOpen]);

  const toggleVisibility = (elementIds: string[]) => {
    elementIds.forEach((id) => {
      const element = document.getElementById(id)!;
      element.style.display = element.style.display === "flex" ? "none" : "flex";
    });
  };

  return (
    <div className={styles["navbar-mobile-styled"]}>
      <div className={styles["navbar-mobile-header"]} id="navbarheader">
        <div className={styles["hamburger"]} onClick={toggleHamburger} id="hamburger">
          <div className={styles["burger"]} />
          <div className={styles["burger"]} />
          <div className={styles["burger"]} />
        </div>
        <div className={styles["x-button-container"]} onClick={toggleHamburger} id="x-button">
          <div className={styles["x-button"]} />
        </div>
        <div className={styles["cart"]} onClick={() => navigateTo("/cart")}>
          <div>CART</div>
        </div>
      </div>
      <div className={styles["navbar-blur-background"]} id="navbarshow">
        <div className={styles["navbar-mobile-items-container"]}>
          <div className={styles["navbar-mobile-item"]} onClick={() => navigateTo("/merch")}>
            MERCH
          </div>
          <div
            className={styles["navbar-mobile-item"]}
            onClick={() => toggleVisibility(["flashes", "wants"])}
          >
            TATTOO
          </div>
          <div className={styles["navbar-mobile-subitem"]} onClick={() => navigateTo("/tattoo")} id="flashes">
            FLASHES
          </div>
          <div className={styles["navbar-mobile-subitem"]} onClick={() => navigateTo("/tattoo")} id="wants">
            WANT TO DO
          </div>
          <div className={styles["navbar-mobile-item"]} onClick={() => toggleVisibility(["quy", "order"])}>
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

export default NavBarLandingMobile;
