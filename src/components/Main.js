import React from "react";
import Shorten from "./Shorten";
import { Container, Button } from "react-bootstrap";
import Recognition from "../images/icon-brand-recognition.svg";
import Records from "../images/icon-detailed-records.svg";
import Customizable from "../images/icon-fully-customizable.svg";

const Main = () => {
  return (
    <main style={{ backgroundColor: "hsla(0, 0%, 75%, 0.2)" }}>
      <Shorten />
      <div className="container text-center">
        <div className="py-5 mx-auto">
          <h2
            className="text-center mb-4"
            style={{ color: "hsl(260, 8%, 14%)" }}
          >
            Advanced Statistics
          </h2>
          <p
            className="text-center"
            style={{ maxWidth: "32rem", margin: "0 auto" }}
          >
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
      </div>

      <Container className="mt-3">
        <div className="container-statistics ml-5">
          <div className="box-statistics">
            <div className="icon-box">
              <img src={Recognition} alt="logo recognition" />
            </div>
            <h3 style={{ fontWeight: 700 }}>Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>

          <div className="box-statistics pos-2">
            <div className="icon-box">
              <img src={Records} alt="logo records" />
            </div>
            <h3 style={{ fontWeight: 700 }}>Detailed Records</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>

          <div className="box-statistics pos-3">
            <div className="icon-box">
              <img src={Customizable} alt="logo customizable" />
            </div>
            <h3 style={{ fontWeight: 700 }}>Fully Customizable</h3>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </Container>

      <section className="boost text-center">
        <h2>Boost your links today</h2>
        <Button className="start mt-4">Get Started</Button>
      </section>
    </main>
  );
};

export default Main;
