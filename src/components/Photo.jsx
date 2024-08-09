import React from "react";
import { Container } from "react-bootstrap";
import style from "../scss/Photo.module.scss";
const Photo = () => {
  return (
    <div>
      <img
        className={style.img}
        src="https://bizweb.dktcdn.net/100/483/366/themes/930438/assets/slider_1.jpg?1722402145420"
        alt=""
      />
    </div>
  );
};

export default Photo;
