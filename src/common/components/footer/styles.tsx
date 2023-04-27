import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles({
  name: "Footer"
})((theme) => ({
  root:{
    justifyContent: "space-between",
    alignItems: "center",
    left: 0,
    bottom: 0,
    width:" 100%",
    height: "80px",
    color: "white",
    textAlign: "center",
  },
  footerText: {
    fontWeight: "500",
    fontSize: "14px",
    fontFamily: "Roboto",
    margin: "0 80px",

    [theme.breakpoints.down("sm")]: {
      margin: "0",
      textAlign: "center",
      width: "100%"
    }
  },
}));
