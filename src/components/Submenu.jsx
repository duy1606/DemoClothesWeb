import React, { useState } from "react";
import style from "../scss/Submenu.module.scss";
const Submenu = () => {
  const [display, setDisplay] = useState(false);
  const handleClick = () => {
    setDisplay(!display);
  };
  return (
    <div className={style.submenu}>
      <button className={style.button} onClick={handleClick}>
        <i className="fa-regular fa-user"></i>
      </button>
      {display ? (
        <div className={`bg-light ${style.list}`}>
          <ul>
            <li>
              <a className={style.a} href="#">
                Đăng Nhập
              </a>
            </li>
            <li>
              <a href="#" className={style.a}>
                Đăng Ký
              </a>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Submenu;
