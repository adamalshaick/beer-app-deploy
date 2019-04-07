import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBeers } from "../../../actions/beerActions";
import Loading from "../Loading";

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.props.getBeers();
    }

    render() {
      const { beers } = this.props.beer;
      if (!beers) {
        return (
          <>
            <Loading />;
          </>
        );
      } else {
        return <ChildComponent {...this.props} />;
      }
    }
  }

  const mapStateToProps = state => ({
    beer: state.beer
  });

  ChildComponent.propTypes = {
    beer: PropTypes.object.isRequired
  };

  return connect(
    mapStateToProps,
    { getBeers }
  )(ComposedComponent);
};
