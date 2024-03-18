import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Shorten = () => {
  const [content, setContent] = useState("");
  const [shortLink, setShortLink] = useState(ls());

  const url = `https://api.shrtco.de/v2/shorten?url=${content}`;

  let displayLink;
  let errorElement = useRef(null);
  let inputField = useRef(null);

  useEffect(() => {
    localStorage.setItem("shortLink", JSON.stringify(shortLink));
  }, [shortLink]);

  function ls() {
    const localData = localStorage.getItem("shortLink");
    return localData
      ? JSON.parse(localData)
      : {
          loading: false,
          data: [],
        };
  }

  function getShort() {
    setShortLink({
      loading: true,
      data: [],
      copied: false,
    });

    axios
      .get(url)
      .then((response) => {
        setShortLink({
          loading: false,
          data: [...shortLink.data, response.data],
        });
      })
      .catch((err) => {
        setShortLink({
          loading: false,
          data: [...shortLink.data],
          error: true,
        });
        console.log(err);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault(e);

    setContent("");

    if (content) {
      getShort();
      errorElement.current.classList.remove("block");
      errorElement.current.classList.add("hidden");
      inputField.current.classList.remove("placeholder-color3");
      inputField.current.classList.add("focus:ring-color1");
      inputField.current.classList.remove("focus:ring-color3");
    } else {
      errorElement.current.classList.remove("hidden");
      errorElement.current.classList.add("block");
      inputField.current.classList.add("placeholder-color3");
      inputField.current.classList.remove("focus:ring-color1");
      inputField.current.classList.add("focus:ring-color3");
      inputField.current.focus();
    }
  };

  const onCopy = function (e) {
    e.target.textContent = "Copied!";
    e.target.classList.remove("bg-color1");
    e.target.classList.add("bg-color2");
  };

  if (shortLink.data) {
    displayLink = shortLink.data.map((data, i) => (
      <Row key={i} className="bg-white p-4 rounded-md mt-6">
        <Col className="border-bottom pb-4  md:border-0 md:pb-0">
          <p className="break-words lg:max-w-full">
            {data.result.original_link}
          </p>
        </Col>
        <Col className="pt-4 md:flex md:gap-6 md:justify-end md:pt-0">
          <p className="text-color1">{data.result.full_short_link2}</p>
          <CopyToClipboard text={data.result.full_short_link2}>
            <Button
              className="copyBtn bg-color1 py-3 w-full block mt-3 rounded-md hover:opacity-80 text-white"
              aria-label="copy"
              onClick={(e) => onCopy(e)}
            >
              Copy
            </Button>
          </CopyToClipboard>
        </Col>
      </Row>
    ));
  }

  if (shortLink.loading) {
  }

  if (shortLink.error) {
  }

  return (
    <>
      <div className="rounded-xl bg-color2 p-6 bg-no-repeat bg-right-top w-full form">
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="md:flex md:gap-6">
            <Form.Control
              type="text"
              ref={inputField}
              value={content}
              placeholder="Shorten a link here"
              className="w-full py-3 px-5 rounded-md border-0 focus:ring-4 focus:ring-color1"
              aria-label="Link to be shorten"
              onChange={(e) => setContent(e.target.value)}
            />
            <p
              ref={errorElement}
              className="text-color3 mt-2 hidden md:absolute md:bottom-0"
            >
              <em>Please add a link</em>
            </p>
            <Button
              type="submit"
              aria-label="Shorten it!"
              className="bg-color1 py-3 text-white w-full block rounded-md hover:opacity-90 mt-6 md:mt-0 md:w-48"
            >
              Shorten it!
            </Button>
          </Form.Group>
        </Form>
      </div>
      <div className="pt-20">{displayLink}</div>
    </>
  );
};

export default Shorten;
