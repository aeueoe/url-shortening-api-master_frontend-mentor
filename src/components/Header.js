import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img_work from "../images/illustration-working.svg";

const Header = () => {
  return (
    <Container className="header">
      <Row className="align-items-center justify-content-center mt-5">
        <Col md={12} lg={6} className="order-lg-2 mb-4 ">
          <img
            src={img_work}
            alt="Illustration of working person"
            className="img-fluid"
          />
        </Col>
        <Col md={12} lg={6} className="mt-3">
          <h1 className="mb-1">More than just shorter links</h1>
          <p className="mb-1">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="start mt-3">Get Started</button>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
