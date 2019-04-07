import React from "react";
import PropTypes from "prop-types";
import Options from "./Options";
import { StyledPage } from "../common/styles/StyledPage";
import getOptions from "../common/hoc/getOptions";
import fetchBeers from "../common/hoc/fetchBeers";
import Columns from "./Columns";

export const MainPage = ({ options, beer }) => {
  return (
    <StyledPage dark={options.options.darkMode}>
      <Options />
      <Columns beer={beer} />
    </StyledPage>
  );
};

MainPage.propTypes = {
  beer: PropTypes.object.isRequired,
  options: PropTypes.object.isRequired
};

export default fetchBeers(getOptions(MainPage));
