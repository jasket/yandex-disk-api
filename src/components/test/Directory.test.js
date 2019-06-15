import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Directory from "../Directory";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faFile } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    items: [
      { type: "dir", path: "/dir1", name: "dir1" },
      { type: "dir", path: "/dir2", name: "dir2" },
      { type: "file", path: "/file1", name: "file1" }
    ]
  };

  const enzymeWrapper = shallow(<Directory {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe("components", () => {
  describe("Directory", () => {
    it("should render self and subcomponents", () => {
      const { enzymeWrapper } = setup();

      expect(enzymeWrapper.find(ListGroup.Item)).toHaveLength(3);
      expect(enzymeWrapper.find(Link)).toHaveLength(2);
      expect(
        enzymeWrapper
          .find(FontAwesomeIcon)
          .first()
          .prop("icon")
      ).toBe(faFolder);
      expect(
        enzymeWrapper
          .find(FontAwesomeIcon)
          .last()
          .prop("icon")
      ).toBe(faFile);
    });
  });
});
