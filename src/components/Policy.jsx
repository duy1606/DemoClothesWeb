import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "../scss/Policy.module.scss";
const Policy = () => {
  return (
    <div className={style.root}>
      <Container>
        <Row>
          <Col xl={3} className={`col-6 ${style.policy}`}>
            <div className={style.icon}>
              <img
                src="https://bizweb.dktcdn.net/100/483/366/themes/930438/assets/chinhsach_1.png?1722402145420"
                alt=""
              />
            </div>
            <div>
              <span className={style.title}>Miễn Phí Vận Chuyển</span>
              <br />
              <span>Cho đơn hàng từ 0Đ</span>
            </div>
          </Col>
          <Col xl={3} className={`col-6 ${style.policy}`}>
            <div className={style.icon}>
              <img
                src="https://bizweb.dktcdn.net/100/483/366/themes/930438/assets/chinhsach_2.png?1722402145420"
                alt=""
              />
            </div>
            <div>
              <span className={style.title}>Đổi Hàng Tận Nhà </span>
              <br />
              <span>Trong vòng 7 ngày</span>
            </div>
          </Col>
          <Col xl={3} className={`col-6 ${style.policy}`}>
            <div className={style.icon}>
              <img
                src="https://bizweb.dktcdn.net/100/483/366/themes/930438/assets/chinhsach_3.png?1722402145420"
                alt=""
              />
            </div>
            <div>
              <span className={style.title}>Thanh Toán COD</span>
              <br />
              <span>Hoặc thanh toán quét mã QR</span>
            </div>
          </Col>
          <Col xl={3} className={`col-6 ${style.policy}`}>
            <div className={style.icon}>
              <img
                src="https://bizweb.dktcdn.net/100/483/366/themes/930438/assets/chinhsach_4.png?1722402145420"
                alt=""
              />
            </div>
            <div>
              <span className={style.title}>Hotline:999999999</span>
              <br />
              <span>Hỗ trợ từ 8:00 đến 22:00</span>
            </div>
          </Col>
        </Row>
        <hr />
      </Container>
    </div>
  );
};

export default Policy;
