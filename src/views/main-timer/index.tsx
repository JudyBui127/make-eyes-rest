import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";
import TimeProgress from "./components/time-progress";
import ActionButtons from "./components/action-buttons";
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import InfoText from "./components/info-text";
import { notifyTimeUp } from "./utils";
import StartWorkingSound from "../../assets/sounds/start-time.mp3";
import RestSound from "../../assets/sounds/rest-time.mp3";

const MINUTES = 20;
const TOTAL_SECONDS = MINUTES*60;
const EYES_OFF_TIME = 20;

const MainTimer = () => {
  const { classes } = useStyles();
  const [isMainTimer, setIsMainTimer] = useState(true);
  const [timeLeft, setTimeLeft] = useState(TOTAL_SECONDS);
  const [isPaused, setIsPaused] = useState(true);
  const [intervalId, setIntervalId] = useState<any>(null);

  const playAudio = () => {
    if (typeof window !== 'undefined') {
      const startAudio = new Audio(StartWorkingSound);
      const restAudio = new Audio(RestSound);
      if (isMainTimer){
        console.log("rest")
        restAudio.play();
      } else {
        console.log("start")
        startAudio.play();
      }
    }
  };

  //handler
  const countdown = () => {
    clearInterval(intervalId);
    const id  = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    setIntervalId(id);
    return () => clearInterval(id);
  };

  const startTimer = () => {
    setIsPaused(false);
    countdown();
  };

  const resetTimer = () => {
    setIsPaused(false);
    setIntervalId(null);
    setTimeLeft(TOTAL_SECONDS);
    setIsMainTimer(true);
    countdown();
  }

  const pauseTimer = () => {
    if (!isPaused){
      clearInterval(intervalId);
      setIntervalId(null);
      setIsPaused(true);
    }
  };

  //actions when time is up
  useEffect(() => {
    if (timeLeft === 0) {
      if (isMainTimer) {
        playAudio();
        setTimeLeft(EYES_OFF_TIME);
        setIsMainTimer(false);
        notifyTimeUp();
      } else {
        playAudio();
        setTimeLeft(TOTAL_SECONDS);
        setIsMainTimer(true);
      }
      setIsPaused(false);
      setIntervalId(null);
      countdown();
    }
  }, [timeLeft, intervalId]);

  useEffect(() => {
    if (!("Notification" in window)) {
      alert("This browser does not support Desktop notifications");
    } else if (Notification.permission !== "denied"){
      Notification.requestPermission();
    }
  },[])
  
  return (
    <Stack direction="column" spacing={6} alignItems="center">
      <Stack
        className={classes.container}
        direction="column"
        spacing={3}>
        <TimeProgress
          timeLeft={timeLeft}
          totalSeconds={TOTAL_SECONDS}
          eyesOffTime={EYES_OFF_TIME}
          isMainTimer={isMainTimer} />
        {isMainTimer 
          ? <Typography className={classes.alertText}>
              Working time...
            </Typography>
          : <Typography className={classes.alertText}>
              <span>Time to look up from your screen</span>
              <span>Focus on an item approximately 20 feet away!</span>
            </Typography>
        }
        <ActionButtons
          resetTimer={resetTimer}
          startTimer={startTimer}
          pauseTimer={pauseTimer}
          isPaused={isPaused} />
      </Stack>
      <InfoText />
    </Stack>
   
  )
};

export default MainTimer;
