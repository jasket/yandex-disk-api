import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faFile } from "@fortawesome/free-solid-svg-icons";
import { removeDiskPrefix, toHumanize } from "../utils";

const Directory = ({ folder, items }) => {
  return (
    <>
      <Row className="row mt-2">
        <Col xs={12}>
          <ListGroup>
            {items.map((value, index) => {
              const isDir = value.type === "dir";
              const colorClass = isDir ? "text-primary" : "text-secondary";
              const icon = isDir ? faFolder : faFile;
              const path = "/" + decodeURI(value.path);
              return (
                <ListGroup.Item key={index} className="flex-container">
                  <div>
                    <FontAwesomeIcon icon={icon} className={colorClass} />{" "}
                    {isDir ? (
                      <Link to={removeDiskPrefix(path)} className={colorClass}>
                        {value.name}
                      </Link>
                    ) : (
                      <span>{value.name}</span>
                    )}
                  </div>
                  <div className="text-secondary">
                    {isDir ? (
                      <Moment format="DD.MM.YYYY">{value.modified}</Moment>
                    ) : (
                      toHumanize(value.size)
                    )}
                  </div>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

Directory.propTypes = {
  folder: PropTypes.object,
  items: PropTypes.array
};

export default Directory;
