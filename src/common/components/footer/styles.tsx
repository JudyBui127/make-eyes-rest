import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles({
  name: "Footer"
})((_theme) => ({
  root:{
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    left: 0,
    bottom: 0,
    width:" 100%",
    height: "80px",
    color: "white",
    textAlign: "center",
    // borderTop: "0.5px solid #808080",
  },
  footerText: {
    fontWeight: "500",
    fontSize: "14px",
    fontFamily: "Roboto",
    margin: "0 80px"
  },
}));
