import React from "react";
import "./search-box.style.css";

/**
 * search-box.component.jsx
 *
 * Functional component that build a search box to filter a list of object.
 *
 * @param placefolder property $placeholder
 * @param function applied onChange  $handleChange
 *
 * usefull nomenclature:
 * ComponentName = props =>
 * props.param1
 * props.param2
 * =
 * ComponentName = ({param1,param2}) =>
 **/

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
