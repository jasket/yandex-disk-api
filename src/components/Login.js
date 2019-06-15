import React from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import YaLogo from "../assets/yadisk_black.svg";

const Welcome = ({ logout, onLogin }) => (
  <Modal show={logout}>
    <Modal.Body>
      <Row className="row mt-2 text-center">
        <Col xs={12}>
          <img
            src={YaLogo}
            width="128"
            height="128"
            className="d-inline-block align-top"
            alt="YandexDisk logo"
          />
        </Col>
        <Col xs={12}>
          <h4>
            Необходимо{" "}
            <a
              href="/"
              onClick={e => {
                e.preventDefault();
                onLogin();
              }}
            >
              войти в систему
            </a>
          </h4>
        </Col>
      </Row>
    </Modal.Body>
  </Modal>
);

Welcome.propTypes = {
  logout: PropTypes.bool,
  onLogin: PropTypes.func
};

export default Welcome;
