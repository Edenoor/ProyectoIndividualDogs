import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./Landing.module.css";

const Landing = () => {
  const history = useHistory();

  const handleOnClick = () => history.push("/main");

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleOnClick}>
        Welcome
      </button>
    </div>
  );
};
export default Landing;
