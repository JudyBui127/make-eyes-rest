import React, { useEffect, useMemo, useState } from "react";
import { useStyles } from "./styles";
import TimeProgress from "./components/time-progress";
import ActionButtons from "./components/action-buttons";
import { Stack } from '@mui/material';

const MINUTES = 20;
const TOTAL_SECONDS = MINUTES*60;

const MainTimer = () => {
  const { classes } = useStyles();
  const [timeLeft, setTimeLeft] = useState(TOTAL_SECONDS);
  const [intervalId, setIntervalId] = useState<any>(null);

  const countdownTimer = () => {
    clearInterval(intervalId);
    const id  = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    setIntervalId(id);
    return () => clearInterval(id);
  };

  useEffect(() => {
    if (timeLeft === 0) {
      clearInterval(intervalId);
    }
  }, [timeLeft, intervalId]);

  const restartTimer = () => {
    setIntervalId(null);
    setTimeLeft(TOTAL_SECONDS);
    countdownTimer();
  };

  return (
      <Stack 
        className={classes.container} 
        direction="column"
        spacing={4}>
        <TimeProgress 
          timeLeft={timeLeft}
          totalSeconds={TOTAL_SECONDS} />
        <ActionButtons restartTimer={restartTimer}/>
      </Stack>
    
  )
};

export default MainTimer;
