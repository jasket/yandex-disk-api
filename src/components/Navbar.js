import React from "react";
import Navbar from "react-bootstrap/Navbar";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import YaLogo from "../assets/yadisk_64.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";

export default ({ user }) => (
  <Navbar bg="light">
    <Navbar.Brand href="#home">
      <img
        src={YaLogo}
        width="32"
        height="32"
        className="d-inline-block align-top"
        alt="YandexDisk logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text className="mr-1">{user.name}</Navbar.Text>
      <OverlayTrigger placement="bottom" overlay={<Tooltip>Выход</Tooltip>}>
        <a className="text-danger" href="#login">
          <FontAwesomeIcon icon={faDoorOpen} />
        </a>
      </OverlayTrigger>
    </Navbar.Collapse>
  </Navbar>
);
