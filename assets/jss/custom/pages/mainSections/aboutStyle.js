import { container, title } from "assets/jss/nextjs-material-kit.js";
import imagesStyle from "assets/jss/nextjs-material-kit/imagesStyles.js";

const aboutStyle = {
  section: {
    padding: "150px 0",
  },
  container: {
    ...container,
  },
  contentWrapper: {

  },
  imgContentWrapper: {
      marginLeft: "auto"
  },
  title: {
    margin: "0",
    minHeight: "32px",
    textDecoration: "none",
    "&:first-letter": {
      color: "#06c"
    }
  },
  subTitle: {
    fontWeight: "500",
    color: "#6c757d",
    marginBottom: "30px"
  },
  img: {
    width: "100%"
  },
  ...imagesStyle,
};

export default aboutStyle;