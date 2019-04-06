import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import BeerImage from "../../../components/beers/BeerImage";
import {
  ImageWrapper,
  Image,
  Thumbnail
} from "../../../components/common/styles/Image";

const mockToggleImage = jest.fn();

describe("render component", () => {
  const Props = {
    beer: {},
    showImage: false
  };

  const wrapper = shallow(<BeerImage {...Props} onClick={mockToggleImage} />);
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe("show the image", () => {
  const Props = {
    beer: {},
    showImage: true
  };
  const wrapper = shallow(<BeerImage {...Props} onClick={mockToggleImage} />);

  it("shows expanded image", () => {
    expect(wrapper.find(ImageWrapper).length).toEqual(1);
    expect(wrapper.find(Image).length).toEqual(1);
  });

  it("calls toggle function after clicking on image wrapper", () => {
    wrapper.find(ImageWrapper).simulate("click");
    expect(mockToggleImage.mock.calls.length).toEqual(1);
  });
});

describe("dont show the image", () => {
  const Props = {
    beer: {},
    showImage: false
  };
  const wrapper = shallow(<BeerImage {...Props} onClick={mockToggleImage} />);

  it("doesn't show expanded image", () => {
    expect(wrapper.find(ImageWrapper).length).toEqual(0);
    expect(wrapper.find(Image).length).toEqual(0);
  });

  it("calls toggle function after clicking on thumbnail", () => {
    wrapper.find(Thumbnail).simulate("click");
    expect(mockToggleImage.mock.calls.length).toEqual(2);
  });
});
