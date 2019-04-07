import React from "react";
import PropTypes from "prop-types";

const SelectList = ({ name, value, onChange, options }) => {
  const selectOptions = options.map(option => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));

  return (
    <select
      className="form-control"
      name={name}
      value={value}
      onChange={onChange}
    >
      {selectOptions}
    </select>
  );
};

SelectList.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

export default SelectList;
