import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Beer from "../../../components/beers/Beer";
import BeerImage from "../../../components/beers/BeerImage";
import {
  Thumbnail,
  ImageWrapper
} from "../../../components/common/styles/Image";

const Props = {
  beer: {}
};

const wrapper = shallow(<Beer {...Props} />);
describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe("toggle image", () => {
  it("should expand the image after clicking on thumbnail", () => {
    wrapper
      .find(BeerImage)
      .dive()
      .find(Thumbnail)
      .simulate("click");

    expect(wrapper.state().showImage).toEqual(true);
  });

  it("should close the image after clicking on image wrapper", () => {
    wrapper
      .find(BeerImage)
      .dive()
      .find(ImageWrapper)
      .simulate("click");

    expect(wrapper.state().showImage).toEqual(false);
  });
});
