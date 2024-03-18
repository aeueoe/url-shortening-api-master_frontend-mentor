import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logo from "../images/logo.svg";

export default function Navigation() {
  return (
    <Navbar className="py-4" expand="lg">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="Logo" height="30" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="text-center">
          <Nav className="me-auto">
            <Nav.Link className="nav-link-item">Features</Nav.Link>
            <Nav.Link className="nav-link-item">Pricing</Nav.Link>
            <Nav.Link className="nav-link-item">Resources</Nav.Link>
          </Nav>
          <Nav className="d-lg-none">
            <hr className="w-100" />
          </Nav>
          <Nav className="ms-lg-auto">
            <Button className="login bg-transparent border-0">Login</Button>
            <Button className="sign">Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
