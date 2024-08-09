import React from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";

const Productlist = () => {
  return (
    <div>
      <Container>
        <h3>Sản Phẩm Mới</h3>
        <Row>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </Row>
        <hr />
      </Container>
    </div>
  );
};

export default Productlist;
