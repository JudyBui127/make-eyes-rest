import React from "react";
import { useStyles } from "./styles";
import TimeProgress from "./components/time-progress";
import ActionButtons from "./components/action-buttons";
import { Stack } from '@mui/material';

const MainTimer = () => {
  const { classes } = useStyles();

  return (
      <Stack 
        className={classes.container} 
        direction="column"
        spacing={4}>
        <TimeProgress/>
        <ActionButtons/>
      </Stack>
    
  )
};

export default MainTimer;
