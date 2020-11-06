import React from "react";
import "./CountryPicker.css";

function CountryPicker({
  countries,
  setCountryFromDropdown,
  countryFromDropdown,
}) {
  const countriesFilterHandler = (e) => {
    setCountryFromDropdown(e.target.value);
  };

  return (
    <div className="country-picker-dropdown">
      <select
        value={countryFromDropdown}
        onChange={countriesFilterHandler}
        name="country-filter"
      >
        {countries.map((country) => {
          return <option key={Math.random() * 1000}>{country}</option>;
        })}
      </select>
    </div>
  );
}

export default CountryPicker;
