import * as React from 'react';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { Stack } from '@mui/material';
import { useStyles } from './styles';

interface MyComponentProps {
  pauseTimer: () => void;
  startTimer: () => void;
  resetTimer: () => void;
  isPaused:boolean;
}

const ActionButtons: React.FC<MyComponentProps> = ({
  startTimer,
  resetTimer,
  pauseTimer,
  isPaused
}) => {
  const { classes } = useStyles();

  return (
    <Stack direction="row" className={classes.root}>
      <Button 
        className={classes.button}
        variant="contained"
        onClick={isPaused ? startTimer : pauseTimer}>
        {isPaused ? <PlayArrowIcon /> : <PauseIcon /> }
      </Button>
      <Button 
        className={classes.button}
        variant="outlined"
        onClick={resetTimer}>
        <RestartAltIcon sx={{color: "white"}}/>
      </Button>
    </Stack>
  );
};

export default ActionButtons;