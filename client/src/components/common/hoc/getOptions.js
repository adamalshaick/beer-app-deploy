import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loading from "../Loading";

export default ChildComponent => {
  class ComposedComponent extends Component {
    render() {
      if (!this.props.options) {
        return <Loading />;
      } else return <ChildComponent {...this.props} />;
    }
  }

  ChildComponent.propTypes = {
    options: PropTypes.object.isRequired
  };

  const mapStateToProps = state => ({
    options: state.options
  });

  return connect(mapStateToProps)(ComposedComponent);
};
