import React, { useRef } from "react";
import {
  Breadcrumb,
  Col,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import style from "../scss/Menu.module.scss";
import Submenu from "./Submenu";
import Searchbox from "./Searchbox";
import Cart from "./Cart";
const Menu = () => {
  return (
    <div className={style.reset}>
      <Navbar expand="lg" bg="light" variant="">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="Products" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">3</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">4</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">5</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">6</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="ABOUT">
                <NavDropdown.Item href="#action/3.1">
                  Giới Thiệu
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Liên Hệ</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  Chính Sách
                </NavDropdown.Item>
              </NavDropdown>
              <Searchbox></Searchbox>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="#" className="text-dark">
            Dyy-Shop
          </Navbar.Brand>
          <Submenu></Submenu>
          <Cart></Cart>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
