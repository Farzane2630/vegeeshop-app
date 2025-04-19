import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./_Navbar.scss";

export default function NavBar() {
 const selectedProducts = useSelector(state=> state.cart)

  return (
    <Navbar expand="lg" className="nav-main">
      <Container className="nav-container">
        <Navbar.Brand href="#" className="logo">
          VEGEFOODS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-ul">
            <Nav.Link href="/" className="nav-item">
              Home
            </Nav.Link>
            <NavDropdown
              className="nav-item"
              title="Shop"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/products/1" className="nav-item">
                <Link to="/products/1" className="link">Shop</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="/wishlist" className="nav-item">
                <Link to="/wishlist" className="link">
                  Wishlist
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="/cart" className="nav-item">
                <Link to="/cart" className="link">
                  Cart
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="/checkout" className="nav-item">
                <Link to="/checkout" className="link">
                  Checkout
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about" className="nav-item">
              <Link to="/about" className="link">
                About
              </Link>
            </Nav.Link>
           
            <Nav.Link href="/contact" className="nav-item">
              <Link to="/contact" className="link">
                Contact
              </Link>
            </Nav.Link>
            <Nav.Link href="/cart" className="nav-item cart-elem">
              <Link to="/cart" className="link">
                <ShoppingCartIcon />
                <span className="orders-count">[{selectedProducts.length}]</span>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
