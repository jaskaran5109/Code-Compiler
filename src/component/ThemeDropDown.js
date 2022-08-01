import React from "react";
import Select from "react-select";
import monacoThemes from "monaco-themes/themes/themelist";
const colourStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    padding: "5px",
    margin: "5px",
    marginLeft: "10px",
    boxShadow: "5px 5px #000000",
    border: "1px solid #000000",
    textAlign: "center",
  }),
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isFocused ? "#000000" : "#ffffff",
      color: isFocused ? "#ffffff" : "#000000",
      cursor: isDisabled ? "not-allowed" : "default",
      boxShadow: "5px 5px #000000",
      transitionDuration: "0.15s",
    };
  },
};
const ThemeDropDown = ({ handleThemeChange, theme }) => {
  return (
    <Select
      placeholder={`Select Theme`}
      options={Object.entries(monacoThemes).map(([themeId, themeName]) => ({
        label: themeName,
        value: themeId,
        key: themeId,
      }))}
      value={theme}
      styles={colourStyles}
      onChange={handleThemeChange}
    />
  );
};

export default ThemeDropDown;
