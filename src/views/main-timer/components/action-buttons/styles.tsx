import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles({
  name: "ActionButtons"
})((_theme) => ({
  root:{
    width: "100%",
    justifyContent: "space-evenly"
  },
  button: {
    width: "80px!important",
    border: "1px solid #1976d2"
  }
}));
