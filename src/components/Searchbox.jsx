import React, { useState } from "react";
import style from "../scss/Searchbox.module.scss";
const Searchbox = () => {
  const [display, setDisplay] = useState(false);
  const handleClick = () => {
    setDisplay(!display);
  };
  return (
    <div className={style.searchbox}>
      <button type="button" className={style.button} onClick={handleClick}>
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
      <input
        type="text"
        placeholder="Nhập tên sản phẩm"
        hidden={!display}
        className="form-control"
      />
    </div>
  );
};

export default Searchbox;
