import React from "react";
import SelectList from "../../../components/common/SelectList";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const Props = {
  options: [{ label: "label", value: "value" }]
};

const wrapper = shallow(<SelectList {...Props} />);
describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
