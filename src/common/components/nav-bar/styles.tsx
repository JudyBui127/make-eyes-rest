import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles({
  name: "NavBar"
})((_theme) => ({
  root:{
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  headline: {
    padding: "16px 0",
    fontWeight: "700",
    fontSize: "32px",
    fontFamily: "Roboto",
    color: "#1976d2"
  },
  icon: {
    width: "40px",
    height: "40px",
    
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  }
}));
