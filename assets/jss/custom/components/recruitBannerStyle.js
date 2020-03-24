import { container } from "assets/jss/nextjs-material-kit.js";

const recruitBannerStyle = {
  container: {
    ...container,
  },
  banner: {
    backgroundColor: "rgba(255, 255, 255, 0)",
    marginTop: 0
  },
  bannerTitle: {
    fontSize: "1.313rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative",
    color: "white"
  },
  bannerSubTitle: {
    fontWeight: "500",
    display: "inline-block",
    position: "relative"
  },
  bannerText: {
    fontSize: "1rem",
    fontWeight: "400",
    display: "inline-block",
    position: "relative"
  },
  bannerHeader: {
    borderRadius: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    textAlign: "center",
    margin: "0 auto",
    padding: "0px, 7px",
  },
  bannerBody: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingBottom: "30px"
  },
  contentWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    width: "90%"
  },
  button: {
    fontSize: "0.9rem",
    fontWeight: "500",
    width: "100%"
  }
};

export default recruitBannerStyle;