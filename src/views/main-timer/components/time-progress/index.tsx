import React, { useMemo } from "react";
import { useStyles } from "./styles";
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


interface MyComponentProps {
  timeLeft: number;
  totalSeconds: number;
}

const TimeProgress: React.FC<MyComponentProps> = ({ 
  timeLeft,
  totalSeconds
}) => {
  const {classes} = useStyles();

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
  

  return (
    <Box className={classes.outerCircle}>
      <CircularProgress 
        thickness={2}
        className={classes.progressCircle}
        variant="determinate"
        value={(timeLeft/totalSeconds)*100} />
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
