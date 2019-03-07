import React, { Component } from "react";
import Navbar from "../layout/Navbar";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBeers } from "../../actions/beerActions";

export class MainPage extends Component {
  componentDidMount() {
    // Get beers
    this.props.getBeers();
  }
  render() {
    const {
      beer
      // , darkMode
    } = this.props;
    return (
      <>
        <Navbar
        // dark={darkMode}
        />
        <div>DDDD</div>
      </>
    );
  }
}

MainPage.propTypes = {
  beer: PropTypes.object.isRequired,
  getBeers: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  beers: state.beers
});

export default connect(
  mapStateToProps,
  { getBeers }
)(MainPage);
