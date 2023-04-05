import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles({
  name: "InfoText"
})((_theme) => ({
  root: {
    width: "70%"
  },
  text: {
    border: "none!important",
    fontFamily: "Roboto",
    color: "#E0E0E0",
    fontWeight: 500,
    fontSize: "20px",
    textAlign: "center"
  },

  questionText: {
    fontWeight: 700,
    fontSize: "24px",
  }
}));


