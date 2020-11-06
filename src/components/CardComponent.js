import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import commaNumber from "comma-number";

function CardComponent({
  className,
  value,
  valueToday,
  cardTitle,
  cardTitleToday,
}) {
  return (
    <Grid item component={Card} className={`card ${className}`}>
      <CardContent>
        <Typography color="textSecondary" variant="h5">
          {cardTitle}
        </Typography>
        <Typography variant="h6">{commaNumber(value)}</Typography>
        <Typography color="textSecondary" variant="h6">
          {cardTitleToday}
        </Typography>
        <Typography variant="h6">{commaNumber(valueToday)}</Typography>
      </CardContent>
    </Grid>
  );
}

export default CardComponent;
