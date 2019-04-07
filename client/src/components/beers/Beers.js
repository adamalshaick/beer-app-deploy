import React, { Component } from "react";
import Beer from "./Beer";
import PropTypes from "prop-types";

export default class Beers extends Component {
  shouldComponentUpdate(nextProps) {
    if (
      nextProps.beers !== this.props.beers ||
      nextProps.sortBy !== this.props.sortBy
    ) {
      return true;
    } else return false;
  }
  render() {
    const { beers } = this.props;
    return beers.map(beer => <Beer beer={beer} />);
  }
}

Beers.propTypes = {
  beers: PropTypes.array.isRequired,
  sortBy: PropTypes.string.isRequired
};
