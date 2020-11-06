import React from "react";
import CardComponent from "./CardComponent";
import { Grid, Typography } from "@material-ui/core";
import "./Data.css";

import CountUp from "react-countup";

function Worldwide({ latest }) {
  return (
    <div>
      <Typography
        className="worldwide-heading"
        color="textPrimary"
        variant="h3"
      >
        Worldwide
      </Typography>

      <div className="worldwide-container">
        <Grid container spacing={3}>
          <CardComponent
            className={"infected"}
            value={latest.cases}
            cardTitle={"Total Cases"}
            cardTitleToday={"Cases Today"}
            valueToday={latest.todayCases}
          />

          <CardComponent
            className={"deaths"}
            value={latest.deaths}
            cardTitle={"Total Deaths"}
            cardTitleToday={"Deaths Today"}
            valueToday={latest.todayDeaths}
          />

          <CardComponent
            className={"recovered"}
            value={latest.recovered}
            cardTitle={"Total Recovered"}
            cardTitleToday={"Recovered Today"}
            valueToday={latest.todayRecovered}
          />
        </Grid>
      </div>
    </div>
  );
}

export default Worldwide;
