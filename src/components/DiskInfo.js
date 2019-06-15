import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { toHumanize } from "../utils";

const DiskInfo = ({ data }) => (
  <Row className="row mt-2">
    <Col xs={12} className="text-secondary">
      Состояние:{" "}
      {data != null ? (
        <span className="text-success">
          {toHumanize(data.total_space - data.used_space)} из{" "}
          {toHumanize(data.total_space)} свободно
        </span>
      ) : (
        ""
      )}
    </Col>
  </Row>
);

DiskInfo.propTypes = {
  data: PropTypes.object
};

export default DiskInfo;
