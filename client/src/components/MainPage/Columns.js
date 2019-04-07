import React from "react";
import Column from "./Column";
import PropTypes from "prop-types";

export const Columns = ({ beer }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <Column beers={beer.beers} counter={"first"} brewers={beer.brewers} />
        </div>
        <div className="col-lg-4">
          <Column
            beers={beer.beers}
            counter={"second"}
            brewers={beer.brewers}
          />
        </div>
        <div className="col-lg-4">
          <Column beers={beer.beers} counter={"third"} brewers={beer.brewers} />
        </div>
      </div>
    </div>
  );
};

Columns.propTypes = {
  beer: PropTypes.object.isRequired
};

export default Columns;
