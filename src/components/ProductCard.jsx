import React from "react";
import { Col } from "react-bootstrap";
import style from "../scss/ProductCard.module.scss";
const ProductCard = () => {
  function formatCurrency(amount, locale = "vi-VN", currency = "VND") {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(amount);
  }
  var amount = 149000;
  return (
    <Col xl={2} className={`col-6 ${style.card}`}>
      <a href="#" className={style.a}>
        <img
          src="https://bizweb.dktcdn.net/thumb/large/100/483/366/products/slide20.jpg?v=1700487802817"
          alt=""
        />
        <div className={style.title}>
          <strong>CLOUDZY LANDSCAPE</strong>
          <br />
          <strong>{formatCurrency(amount)}</strong>
        </div>
        <div className={style.option}>
          <div>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="gray"
                width="40px"
                height="40px"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </a>
          </div>
          <div>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="gray"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                width="40px"
                height="40px"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </a>
          </div>
          <div>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                width="40px"
                height="40px"
              >
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm-.88-9.12h1.75v6h-1.75zm.88-3.38a1.12 1.12 0 1 1-1.12 1.12 1.12 1.12 0 0 1 1.12-1.12z" />
              </svg>
            </a>
          </div>
        </div>
      </a>
    </Col>
  );
};

export default ProductCard;
