import React from "react";
import PropTypes from "prop-types";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHdd } from "@fortawesome/free-solid-svg-icons";
import { pathStringParts, getCurrentPath } from "../utils";

const PathBar = ({ data }) => {
  let splitArr = pathStringParts(data);
  var lastItem = splitArr.pop();
  return (
    <>
      <Breadcrumb>
        <LinkContainer to="/">
          <Breadcrumb.Item>
            <FontAwesomeIcon icon={faHdd} className="text-primary" />
          </Breadcrumb.Item>
        </LinkContainer>
        {splitArr.map((value, index) => {
          const path = "/" + getCurrentPath(splitArr, index);
          return (
            <LinkContainer key={index} to={path}>
              <Breadcrumb.Item>{value}</Breadcrumb.Item>
            </LinkContainer>
          );
        })}
        <Breadcrumb.Item active>{lastItem}</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};

PathBar.propTypes = {
  data: PropTypes.any
};

export default PathBar;
