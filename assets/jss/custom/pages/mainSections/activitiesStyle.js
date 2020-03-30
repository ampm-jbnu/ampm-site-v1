
const activitiesStyle = theme => ({
  section: {
    padding: "50px 0",
    backgroundColor: "#f5f5f7",
    textAlign: "center"
  },
  container: {
      padding: "15px"
  },
  title: {
    fontWeight: "500",
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  contentWrapper: {
    margin: 0,
    padding: 0,
    height: "30vw",
    [theme.breakpoints.down("sm")]: {
      height: "60vw"
    }
  },
  content: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  captionWrapper: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  caption: {
    fontSize: "1.715rem",
    fontWeight: "400",
    lineHeight: "normal",
    color: "#f5f5f7",
    position: "relative",
    textTransform: "uppercase",
    transition: "all .25s",
  },
  blurWrapper: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    overflow: "hidden",
    opacity: 0,
    "&:hover, &:focus": {
      opacity: 1,
    }
  },
  blur: {
    width: "100%",
    height: "100%",
    filter: "blur(10px)",
    transition: "all .35s",
  },
  overlay: {
    backgroundColor: "#05b",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    opacity: 0.7,
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    transition: "all .55s",
  },
  overlayTitle: {
    fontSize: "1.313rem",
    fontWeight: "400",
    lineHeight: "normal",
    color: "#fff",
    padding: "1rem 1rem 1.5vw",
    textTransform: "uppercase",
  },
  overlayCaption: {
    fontSize: "0.851rem",
    fontWeight: "400",
    padding: "1.5vw 1rem 1rem",
    color: "#fff",
    textTransform: "uppercase",
  },
  img: {
    width: "100%",
  },
  textButton: {
    margin: 0,
    fontSize: "1.131rem",
    fontWeight: "600",
  },
  space30: {
    height: "30px",
    display: "block"
  },
  space50: {
    height: "50px",
    display: "block"
  },
});

export default activitiesStyle;