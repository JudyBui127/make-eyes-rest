import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles({
  name: "InfoText"
})((theme) => ({
  root: {
    width: "70%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    }
  },
  text: {
    border: "none!important",
    fontFamily: "Roboto",
    color: "#E0E0E0",
    fontWeight: 500,
    fontSize: "18px",
    textAlign: "center",
    lineHeight: "30px",
    backgroundColor: "transparent!important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    }
  },

  questionText: {
    fontWeight: 700,
    fontSize: "24px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    }
  }
}));


