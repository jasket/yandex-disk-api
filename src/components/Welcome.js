import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import YaLogo from "../assets/yadisk_black.svg";

const OAUTH_ID = "f3f6c5f3cb464384b4b6307b987909c0";

const Welcome = ({ logged }) => (
  <Row className="row mt-2 text-center">
    <Col xs={12}>
      <img
        src={YaLogo}
        width="256"
        height="256"
        className="d-inline-block align-top"
        alt="YandexDisk logo"
      />
    </Col>
    <Col xs={12}>
      {logged ? (
        <h3>
          Вы успешно авторизованы, <Link to="/">войти</Link>
        </h3>
      ) : (
        <h2>
          Необходимо{" "}
          <a
            href="/"
            onClick={e => {
              e.preventDefault();
              const url = `https://oauth.yandex.ru/authorize?response_type=token&client_id=${OAUTH_ID}`;
              window.open(url, "_self");
            }}
          >
            войти в систему
          </a>
        </h2>
      )}
    </Col>
  </Row>
);

Welcome.propTypes = {
  logged: PropTypes.bool
};

export default Welcome;
