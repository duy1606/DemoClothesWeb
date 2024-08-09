import React from "react";
import style from "../scss/Line.module.scss";
const Line = () => {
  return (
    <div className={style.line}>
      <marquee behavior="" direction="">
        <small className={style.title}>
          VỪA LÒNG KHÁCH ĐẾN * HÀI LÒNG KHÁCH ĐI * UY TÍN TẠO NIỀM TIN
        </small>
      </marquee>
    </div>
  );
};

export default Line;
