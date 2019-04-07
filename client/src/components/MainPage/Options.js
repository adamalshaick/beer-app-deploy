import React, { Component } from "react";
import { connect } from "react-redux";
import { changeOptions } from "../../actions/optionActions";
import { Menu } from "../common/styles/Menu";
import SelectList from "../common/SelectList";
import { sortOptions } from "../../utils/sortItems";
import { selectOptions } from "../../utils/selectOptions";
import getOptions from "../common/hoc/getOptions";
import { Button } from "../common/styles/Button";
import classnames from "classnames";
import PropTypes from "prop-types";

export class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptions: false,
      darkMode: false,
      loadNumber: 15,
      sortOption: ""
    };
  }

  componentDidMount() {
    const options = JSON.parse(localStorage.getItem("settings"));
    if (options) {
      this.setState(options, () => {
        const { showOptions, ...settings } = this.state;
        this.props.changeOptions(settings);
      });
    } else {
      const { showOptions, ...settings } = this.state;
      this.props.changeOptions(settings);
    }
  }

  toggleDarkMode = () => {
    this.setState(
      this.setState(prevState => ({
        darkMode: !prevState.darkMode
      })),
      () => {
        const { showOptions, ...settings } = this.state;
        localStorage.setItem("settings", JSON.stringify(settings));
        this.props.changeOptions(JSON.parse(localStorage.getItem("settings")));
      }
    );
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      const { showOptions, ...settings } = this.state;
      localStorage.setItem("settings", JSON.stringify(settings));
      this.props.changeOptions(JSON.parse(localStorage.getItem("settings")));
    });
  };

  render() {
    return (
      <>
        <Button
          className={classnames("btn btn-lg btn-light", {
            "btn-dark": this.props.options.options.darkMode
          })}
          onClick={() => {
            this.setState(prevState => ({
              showOptions: !prevState.showOptions
            }));
          }}
        >
          <i className="fas fa-cog" /> Options
        </Button>
        <Menu
          dark={this.props.options.options.darkMode}
          showOptions={this.state.showOptions}
        >
          <div className="container-fluid">
            <div className="row">
              <input
                style={{ width: "20px", height: "20px" }}
                name="darkMode"
                type="checkbox"
                checked={this.state.darkMode}
                onChange={this.toggleDarkMode}
              />
              <p>Dark mode</p>
            </div>
            <div className="row">
              <p style={{ transform: "translateY(35%)" }} className="mr-2">
                Loaded elements:
              </p>
              <SelectList
                name="loadNumber"
                onChange={this.onChange}
                options={selectOptions}
                value={this.state.loadNumber}
              />
            </div>
            <div className="row">
              <p style={{ transform: "translateY(35%)" }} className="mr-2">
                Sort by:
              </p>
              <SelectList
                name="sortOption"
                onChange={this.onChange}
                options={sortOptions}
                value={this.state.sortOption}
              />
            </div>
          </div>
        </Menu>
      </>
    );
  }
}

Options.propTypes = {
  changeOptions: PropTypes.func.isRequired
};

export default connect(
  null,
  { changeOptions }
)(getOptions(Options));
