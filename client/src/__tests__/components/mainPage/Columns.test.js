import React from "react";
import Columns from "../../../components/mainPage/Columns";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const wrapper = shallow(<Columns />);
describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
