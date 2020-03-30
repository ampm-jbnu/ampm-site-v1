const nowStyle = theme => ({
  section: {
    padding: "100px 0",
    backgroundColor: "#000",
    color: "white",
    textAlign: "center"
  },
  container: {
    width: "100%",
    position: "relative",
    height: "600px"
  },
  contentWrapper: {
    position: "absolute",
    top: 0,
    width: "100%"
  },
  content: {
    backgroundAttachment: "fixed",
    width: "100%",
    height: "610px",
    zIndex: "-2",
  },
  overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  captionWrapper: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem 1rem 2rem"

  },
  title: {
    margin: "0",
    fontWeight: "500",
    minHeight: "32px",
    textDecoration: "none",
  },
  caption: {
    fontWeight: "500",
    fontSize: "4.7rem",
    textDecoration: "none",
    color: "#fff",
  },
  captionSmall: {
    fontWeight: "300",
    fontSize: "1.131rem",
    color: "white"
  },
  subTitle: {
    fontWeight: "500",
    color: "#6c757d",
    marginBottom: "30px"
  },
  img: {
    width: "100%"
  },
  textButton: {
    margin: 0,
    fontSize: "1.131rem",
    fontWeight: "600",
  },
  space50: {
    height: "50px",
    display: "block"
  },
});

export default nowStyle;