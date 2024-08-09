import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "../scss/Footer.module.scss";
const Footer = () => {
  return (
    <div className={style.footer}>
      <Container>
        <Row>
          <Col xl={3}>
            <strong>CHÍNH SÁCH</strong>
            <p>Chính sách đổi trả</p>
            <p>Chính sách thanh toán</p>
            <p>Chính sách vận chuyển</p>
            <p>Chính sách kiểm hàng</p>
          </Col>
          <Col xl={7}>
            <strong>Thông Tin</strong>
            <p>
              Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng
              góp từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản
              phẩm tốt hơn nữa.
            </p>
            <p>HỘ KINH DOANH CLOUDZY THỜI TRANG UNISEX</p>
            <p>
              412/25/12 Đường Hà Duy Phiên, Xã Bình Mỹ, Huyện Củ Chi, TP. HCM (
              ngay cầu Phú Cường)
            </p>
          </Col>
          <Col>
            <strong>HƯỚNG DẪN</strong>
            <p>Hướng dẫn mua hàng</p>
            <p>Hướng dẫn thanh toán</p>
            <p>Điều kiện giao nhận</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
