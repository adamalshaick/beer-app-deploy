import React from "react";
import { Image, ImageWrapper, Thumbnail } from "../common/styles/Image";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import PropTypes from "prop-types";

const BeerImage = ({ showImage, beer, onClick }) => {
  const transitionOptions = { transitionName: "fade" };
  let image;
  if (showImage) {
    image = (
      <div key={beer}>
        <ImageWrapper onClick={onClick} />
        <Image
          src={beer.image_url}
          onError={e => {
            e.target.onerror = null;
            e.target.src =
              "https://www.equiinzert.cz/gallery/inzeraty/no-image.png";
          }}
          showImage={showImage}
        />
      </div>
    );
  }
  return (
    <>
      <Thumbnail
        showImage={showImage}
        src={beer.image_url}
        onError={e => {
          e.target.onerror = null;
          e.target.src =
            "https://www.equiinzert.cz/gallery/inzeraty/no-image.png";
        }}
        onClick={onClick}
      />

      <ReactCSSTransitionGroup {...transitionOptions}>
        {image}
      </ReactCSSTransitionGroup>
    </>
  );
};

BeerImage.propTypes = {
  showImage: PropTypes.bool.isRequired,
  beer: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default BeerImage;
