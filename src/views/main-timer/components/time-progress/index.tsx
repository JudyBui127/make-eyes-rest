import React, { useState, useMemo, useEffect } from "react";
import { useStyles } from "./styles";
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const MINUTES = 20;
const TOTAL_SECONDS = MINUTES*60;

const TimeProgress = (
  // props: { minutes: number, seconds: number } 
) => {
  const { classes } = useStyles();
  const [timeLeft, setTimeLeft] = useState(TOTAL_SECONDS);
  const [intervalId, setIntervalId] = useState<any>(null);

  const startTimer = () => {
    clearInterval(intervalId);
    const id  = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    setIntervalId(id);
    return id;
  };

  const formattedTimeDisplay = useMemo(() => {
    if (timeLeft === 0) {
      return "00:00";
    }
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    if (seconds < 10){
      return `${minutes}:0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  }, [timeLeft])
  

  useEffect(() => {
    const id = startTimer();
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      clearInterval(intervalId);
    }
  }, [timeLeft, intervalId]);

  return (
    <Box className={classes.outerCircle}>
      <CircularProgress 
        thickness={2}
        className={classes.progressCircle}
        variant="determinate"
        value={(timeLeft/TOTAL_SECONDS)*100} />
      <Box className={classes.innerContent}>
        <Typography
          className={classes.timeText}
          component="div"
          color="white"
        >{formattedTimeDisplay}</Typography>
      </Box>
    </Box>

  )
};

export default TimeProgress;
