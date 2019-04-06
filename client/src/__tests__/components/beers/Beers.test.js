import React from "react";
import Beers from "../../../components/beers/Beers";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Beer from "../../../components/beers/Beer";

const Props = {
  beers: [
    {
      beer: "beer 1"
    },
    {
      beer: "beer 2"
    }
  ],
  sortBy: "name"
};

const wrapper = shallow(<Beers {...Props} />);
describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe("beers feed", () => {
  it("returns beer for each element in beers array", () => {
    expect(wrapper.find(Beer).length).toEqual(2);
  });
});
