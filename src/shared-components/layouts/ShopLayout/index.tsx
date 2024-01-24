import classNames from "classnames";
import { Outlet } from "react-router-dom";

import styles from "./ShopLayout.module.scss";

const ShopLayout: React.FC = () => {
  return (
    <div className={classNames(styles["container"])}>
      <Outlet />
    </div>
  );
};
export default ShopLayout;
