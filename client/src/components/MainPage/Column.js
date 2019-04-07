import React, { Component } from "react";
import SelectList from "../common/SelectList";
import Beers from "../beers/Beers";
import getOptions from "../common/hoc/getOptions";
import { StyledColumn } from "../common/styles/StyledColumn";
import { sort } from "../../utils/sortItems";

export class Column extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBrewer: "",
      sortBy: "name",
      beersByBrewer: [],
      beers: [],
      loadNumber: 15,
      loadMore: 1
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (
      props.options.options.loadNumber &&
      parseInt(props.options.options.loadNumber, 10) !== state.loadNumber
    ) {
      return {
        loadNumber: parseInt(props.options.options.loadNumber, 10)
      };
    } else if (
      props.options.options.sortOption &&
      props.options.options.sortOption !== state.sortBy
    ) {
      return { sortBy: props.options.options.sortOption };
    } else return null;
  }

  componentDidMount() {
    const selectedBrewer = localStorage.getItem(`${this.props.counter}`);
    if (selectedBrewer) {
      const filteredBeers = this.props.beers.filter(beer => {
        return beer.brewer === selectedBrewer;
      });
      this.setState({ selectedBrewer: selectedBrewer, beers: filteredBeers });
    }
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousState.selectedBrewer !== this.state.selectedBrewer) {
      const filteredBeers = this.props.beers.filter(beer => {
        return beer.brewer === this.state.selectedBrewer;
      });
      localStorage.setItem(`${this.props.counter}`, this.state.selectedBrewer);
      this.setState({
        beers: filteredBeers,
        beersByBrewer: filteredBeers.slice(0, this.state.loadNumber)
      });
    }
    if (previousState.loadNumber !== this.state.loadNumber) {
      this.setState({
        beersByBrewer: this.state.beers.slice(0, this.state.loadNumber),
        loadMore: 1
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onClick = e => {
    e.preventDefault();
    this.setState(
      {
        loadMore: this.state.loadMore + 1
      },
      () => {
        this.setState({
          beersByBrewer: this.state.beers.slice(
            0,
            this.props.options.options.loadNumber * this.state.loadMore
          )
        });
      }
    );
  };

  render() {
    const { brewers } = this.props;
    const { options } = this.props.options;
    const brewerOptions = brewers.map(brewer => {
      return { label: brewer, value: brewer };
    });
    brewerOptions.unshift({ label: "* select brewer", value: "" });

    return (
      <StyledColumn dark={options.darkMode}>
        <SelectList
          name="selectedBrewer"
          options={brewerOptions}
          onChange={this.onChange}
          value={this.state.selectedBrewer}
        />

        {this.state.beersByBrewer && this.state.beersByBrewer.length > 0 ? (
          <Beers
            beers={sort(this.state.beersByBrewer, this.state.sortBy)}
            sortBy={this.state.sortBy}
          />
        ) : null}

        {this.state.beers.length >
        this.state.loadNumber * this.state.loadMore ? (
          <div className="text-center">
            <button className="btn btn-light" onClick={this.onClick}>
              Load More
            </button>
          </div>
        ) : null}
      </StyledColumn>
    );
  }
}

export default getOptions(Column);
