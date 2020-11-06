import React, { useEffect, useState } from "react";
import axios from "axios";
import CountryPicker from "./components/CountryPicker";
import Worldwide from "./components/Worldwide";
import Country from "./components/Country";
import Footer from "./components/Footer";
import "./App.css";
import "./components/Data.css";

function App() {
  const [latest, setLatest] = useState([]);
  const [countries, setCountries] = useState([]);
  const [countryFromDropdown, setCountryFromDropdown] = useState("Nepal");
  const [dataForSelectedCountry, setDataForSelectedCountry] = useState([]);

  useEffect(() => {
    axios
      .all([
        axios.get("https://disease.sh/v3/covid-19/all"),
        axios.get("https://disease.sh/v3/covid-19/countries"),
        axios.get(
          `https://disease.sh/v3/covid-19/countries/${countryFromDropdown}`
        ),
      ])
      .then((responseArray) => {
        setLatest(responseArray[0].data);
        setCountries(
          responseArray[1].data.map((items) => {
            return items.country;
          })
        );
        setDataForSelectedCountry(responseArray[2].data);
      });
  }, [countryFromDropdown]);

  return (
    <div className="container">
      <Worldwide latest={latest} />
      <CountryPicker
        setCountryFromDropdown={setCountryFromDropdown}
        countryFromDropdown={countryFromDropdown}
        countries={countries}
      />
      <Country dataForSelectedCountry={dataForSelectedCountry} />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
