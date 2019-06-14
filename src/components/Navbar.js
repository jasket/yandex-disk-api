import React from "react";
import Navbar from "react-bootstrap/Navbar";
import PropTypes from "prop-types";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import YaLogo from "../assets/yadisk_black.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";

const TopNavbar = ({ name, logout }) => {
  if (!name) {
    return "";
  }

  return (
    <Navbar bg="light">
      <Navbar.Brand href="/">
        <img
          src={YaLogo}
          width="32"
          height="32"
          className="d-inline-block align-top"
          alt="YandexDisk logo"
        />
        <span className="ml-1 text-danger">
          Я<span className="text-dark">Диск</span>
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className="mr-1">{name}</Navbar.Text>
        <OverlayTrigger placement="bottom" overlay={<Tooltip>Выход</Tooltip>}>
          <a
            className="text-danger"
            href="#login"
            onClick={e => {
              e.preventDefault();
              logout();
            }}
          >
            <FontAwesomeIcon icon={faDoorOpen} />
          </a>
        </OverlayTrigger>
      </Navbar.Collapse>
    </Navbar>
  );
};

TopNavbar.propTypes = {
  name: PropTypes.string,
  logout: PropTypes.func
};

export default TopNavbar;
