import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles({
  name: "MainTimer"
})((_theme) => ({
  container: {
    width: "400px",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  alertText: {
    border: "none!important",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Roboto",
    fontSize: "18px",
    color: "#E0E0E0",
    fontWeight: 500,
    marginTop: "16px!important",
    width: "max-content!important",
  }
}));


