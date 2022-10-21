import React, { useEffect } from "react";
import Router from "next/router";

import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import { animateScroll as scroll } from "react-scroll"

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import SectionIntro from "pages-sections/MainPage-Sections/SectionIntro";
import SectionPeople from "pages-sections/MainPage-Sections/SectionPeople";
import SectionHistory from "pages-sections/MainPage-Sections/SectionHistory";

import styles from "assets/jss/custom/pages/indexPage";
import SectionActivities from "../pages-sections/MainPage-Sections/SectionActivities";
import SectionAbout from "../pages-sections/MainPage-Sections/SectionAbout";
import SectionNow from "../pages-sections/MainPage-Sections/SectionNow";

const useStyles = makeStyles(styles);

export default function Index(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        brand="AM:PM"
        onBrandClick={scroll.scrollToTop}
        rightLinks={<HeaderLinks />}
        fixed
        color="dark"
        changeColorOnScroll={{
          height: 400,
          color: "none"
        }}
        {...rest}
      />
      <SectionIntro />
      <div className={classNames(classes.main)}>
          <SectionAbout />
          <SectionActivities />
          <SectionHistory />
          <SectionNow />
          <SectionPeople />
        <Footer darkFont />
      </div>
    </div>
  );
}
