import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import styles from "./Pagination.module.css";

const Pagination = ({ dogs }) => {
  const history = useHistory();
  const query = new URLSearchParams(useLocation().search.slice(1));
  const name = query.get("name");
  const arreglin = Array(Math.ceil(dogs.length / 14))
    .fill(0)
    .map((el, index) => index);
  return (
    <div className={styles.container}>
      {arreglin.length > 1 &&
        arreglin.map((el) => (
          <button
            key={el}
            onClick={() =>
              history.push(`/main?name=${name ? name : ""}&from=${el * 8}`)
            }
          >
            {el + 1}
          </button>
        ))}
    </div>
  );
};
export default Pagination;
