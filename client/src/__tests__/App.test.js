import React from "react";
import App from "../App";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const wrapper = shallow(<App />);
describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
