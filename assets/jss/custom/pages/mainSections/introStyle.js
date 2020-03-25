import { container } from "assets/jss/nextjs-material-kit.js";

const introStyle = {
  container: {
    ...container,
    zIndex: "2",
    position: "relative",
    paddingTop: "35vh",
    color: "#FFFFFF",
    paddingBottom: "200px"
  },
  pageHeader: {
    minHeight: "100vh",
    height: "auto",
    display: "inherit",
    position: "relative",
    margin: "0",
    padding: "0",
    border: "0",
    alignItems: "center",
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""'
    },
    "& footer li a,& footer li a:hover,& footer li a:active": {
      color: "#FFFFFF"
    },
    "& footer": {
      position: "absolute",
      bottom: "0",
      width: "100%"
    }
  },
  title: {
    fontSize: "2.3rem",
    fontWeight: "400",
    display: "block",
    position: "relative",
    margin: "0px",
  },
  subtitle: {
    fontSize: "1.131rem",
    fontWeight: "300",
    maxWidth: "510px",
    margin: "10px 0 0"
  },
  desc: {
    fontSize: "0.8rem",
    fontWeight: "400"
  },
  contentWrapper: {
    marginTop: "25px",
    marginBottom: "10px",
  },
  textWrapper: {
    color: "white",
    textAlign: "center",
  },
  icon: {
    width: "61px",
    height: "61px"
  },
  link: {
    width: "100%"
  },
  button: {
    fontSize: "0.9rem",
    fontWeight: "500",
    width: "80%"
  },
  textButton: {
    fontSize: "0.9rem",
    fontWeight: "600",
    padding: "0"
  },
};

export default introStyle;