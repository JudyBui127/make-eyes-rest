import { styled } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles({
  name: "TimeProgress"
})((_theme) => ({
  outerCircle: {
    position: 'relative', 
    display: 'inline-flex',
    width: "100%"
  },

  innerContent: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  progressCircle: {
    width: "100%!important",
    height: "auto!important"
  },

  timeText: {
    fontFamily: 'Arial',
    fontSize: "64px",
    letterSpacing: "6px"
  }
}));
