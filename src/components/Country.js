import React from "react";
import CardComponent from "./CardComponent";
import { Grid, Typography } from "@material-ui/core";
import "./Data.css";

//test
function Country({ dataForSelectedCountry }) {
  return (
    <div>
      <Typography className="country-heading" color="textPrimary" variant="h3">
        {dataForSelectedCountry.country}
      </Typography>

      <div className="worldwide-container">
        <Grid container spacing={3}>
          <CardComponent
            className={"infected"}
            value={dataForSelectedCountry.cases}
            cardTitle={"Total Cases"}
            cardTitleToday={"Cases Today"}
            valueToday={dataForSelectedCountry.todayCases}
          />

          <CardComponent
            className={"deaths"}
            value={dataForSelectedCountry.deaths}
            cardTitle={"Total Deaths"}
            cardTitleToday={"Deaths Today"}
            valueToday={dataForSelectedCountry.todayDeaths}
          />

          <CardComponent
            className={"recovered"}
            value={dataForSelectedCountry.recovered}
            cardTitle={"Total Recovered"}
            cardTitleToday={"Recovered Today"}
            valueToday={dataForSelectedCountry.todayRecovered}
          />
        </Grid>
      </div>
    </div>
  );
}
export default Country;
