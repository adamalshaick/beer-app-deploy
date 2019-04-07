import React from "react";
import MainPage from "../../../components/mainPage/MainPage";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const wrapper = shallow(<MainPage />);
describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
