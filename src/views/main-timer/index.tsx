import React from "react";
import { useStyles } from "./styles";
import TimeProgress from "./components/time-progress";

const MainTimer = () => {
  const { classes } = useStyles();

  return (
      <div className={classes.container}>
        <TimeProgress/>
      </div>
    
  )
};

export default MainTimer;
