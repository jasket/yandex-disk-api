import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Login from "../Login";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    logout: true,
    onLogin: () => {}
  };

  const enzymeWrapper = shallow(<Login {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe("components", () => {
  describe("Login", () => {
    it("should render self and subcomponents", () => {
      const { enzymeWrapper } = setup();

      expect(enzymeWrapper.find("a")).toHaveLength(1);
      expect(enzymeWrapper.find("a").text()).toBe("войти в систему");
    });
  });
});
