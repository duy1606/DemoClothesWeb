import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "../scss/HotProduct.module.scss";
const HotProduct = () => {
  return (
    <div>
      <Container>
        <h3>Sản Phẩm Nổi Bật</h3>
        <Row>
          <Col xl={4} className={style.item}>
            <img
              src="https://bizweb.dktcdn.net/100/483/366/themes/930438/assets/image_set_1.png?1722402145420"
              alt=""
            />
          </Col>
          <Col xl={4} className={style.item}>
            <img
              src="https://bizweb.dktcdn.net/100/483/366/themes/930438/assets/image_set_2.png?1722402145420"
              alt=""
            />
          </Col>
          <Col xl={4} className={style.item}>
            <img
              src="https://bizweb.dktcdn.net/100/483/366/themes/930438/assets/image_set_3.png?1722402145420"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HotProduct;
