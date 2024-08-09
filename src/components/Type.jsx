import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "../scss/Type.module.scss";
const Type = () => {
  return (
    <div>
      <Container>
        <br />
        <Row className={style.list}>
          <Col className={`col-12 ${style.background}`} xl={4}>
            <img
              src="https://bizweb.dktcdn.net/100/483/366/themes/930438/assets/background_danhmuc_1.jpg?1722402145420"
              alt=""
            />
            <div className={style.gallary}>
              <img
                src="https://bizweb.dktcdn.net/100/483/366/themes/930438/assets/danhmuc_1.jpg?1722402145420"
                alt=""
              />
            </div>
            <div className={style.title}>
              <a href="#">Xem thêm</a>
            </div>
          </Col>
          <Col className={`col-12 ${style.background}`} xl={4}>
            <img
              src="https://bizweb.dktcdn.net/100/483/366/themes/930438/assets/background_danhmuc_2.jpg?1722402145420"
              alt=""
            />
            <div className={style.gallary}>
              <img
                src="https://bizweb.dktcdn.net/100/483/366/themes/930438/assets/danhmuc_2.jpg?1722402145420"
                alt=""
              />
            </div>
            <div className={style.title}>
              <a href="#">Xem thêm</a>
            </div>
          </Col>
          <Col className={`col-12 ${style.background}`} xl={4}>
            <img
              src="https://bizweb.dktcdn.net/100/483/366/themes/930438/assets/background_danhmuc_3.jpg?1722402145420"
              alt=""
            />
            <div className={style.gallary}>
              <img
                src="https://bizweb.dktcdn.net/100/483/366/themes/930438/assets/danhmuc_3.jpg?1722402145420"
                alt=""
              />
            </div>
            <div className={style.title}>
              <a href="#">Xem thêm</a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Type;
