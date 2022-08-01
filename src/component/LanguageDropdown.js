import React from "react";
import Select from "react-select";
import { languageOptions } from "../constants/languageOptions";
const colourStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    padding: "5px",
    margin: "5px",
    marginLeft: "10px",
    boxShadow: "5px 5px #000000",
    border:"1px solid #000000",
    textAlign: "center",
  }),
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isFocused ? "#000000" : "#ffffff",
      color: isFocused ? "#ffffff" : "#000000",
      cursor: isDisabled ? "not-allowed" : "default",
      boxShadow:"5px 5px #000000",
    transitionDuration: '0.15s'
    };
  },
};

const LanguageDropdown = ({ language, onSelectChange }) => {
  return (
    <Select
      styles={colourStyles}
      width={`100%`}
      options={languageOptions}
      defaultValue={languageOptions[0]}
      value={language}
      onChange={(selectedOption) => onSelectChange(selectedOption)}
    />
  );
};

export default LanguageDropdown;
