import React, { Component } from "react";
import { BeersColumn } from "../common/styles/StyledColumn";
import PropTypes from "prop-types";
import BeerImage from "./BeerImage";

class Beer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showImage: false
    };
  }
  // onClick = e => {
  //   e.preventDefault();
  //   this.setState({ showImage: true });
  // };

  // onClose = e => {
  //   e.preventDefault();
  //   this.setState({ showImage: false });
  // };

  render() {
    const { beer } = this.props;
    return (
      <BeersColumn className="row">
        <div className="col-8">
          <strong>name:</strong> {beer.name}
          <br />
          <strong>type:</strong> {beer.type}
          <br />
          <strong>price:</strong> {beer.price}
        </div>
        <div className="col-4">
          <BeerImage
            showImage={this.state.showImage}
            beer={beer}
            onClick={() => {
              this.setState(prevState => ({
                showImage: !prevState.showImage
              }));
            }}
          />
        </div>
      </BeersColumn>
    );
  }
}

Beer.propTypes = {
  beer: PropTypes.object.isRequired
};

export default Beer;
