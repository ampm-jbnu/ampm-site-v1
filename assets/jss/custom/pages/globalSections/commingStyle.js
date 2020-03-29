import { container, title } from "assets/jss/nextjs-material-kit.js";
import imagesStyle from "assets/jss/nextjs-material-kit/imagesStyles.js";

const commingStyle = {
  container: {
    ...container,
    zIndex: "2",
    position: "relative",
    color: "#FFFFFF",
    paddingTop: "25vh",
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
    fontSize: "1.858rem",
    minHeight: "32px",
    textDecoration: "none",
    marginBottom: "30px"
  },
  description: {
    marginBottom: "30px"
  },
  textButton: {
    fontSize: "0.9rem",
    fontWeight: "600",
    padding: "0",
    marginBottom: "20px"
  },
  img: {
    width: "100%"
  },
  ...imagesStyle,
};

export default commingStyle;