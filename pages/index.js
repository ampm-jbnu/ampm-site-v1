import React, { useEffect } from "react";
import Router from "next/router";

import classNames from "classnames";
import Link from "next/link"
import { makeStyles } from "@material-ui/core/styles";

import { animateScroll as scroll } from "react-scroll"

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";
import SectionIntro from "pages-sections/MainPage-Sections/SectionIntro";
import SectionPeople from "pages-sections/MainPage-Sections/SectionPeople";

import styles from "assets/jss/custom/pages/indexPage";

const useStyles = makeStyles(styles);

export default function Index(props) {
  const classes = useStyles();
  const { ...rest } = props;

  useEffect(() => {
    Router.push("/index");
  }, []);

  return (
    <div>
      <Header
        brand="AM:PM"
        onBrandClick={scroll.scrollToTop}
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      {/* <Parallax image={require("assets/img/ampm_header01.jpg")}>
        <div className={classes.parallax}>
          <RecruitBanner className={classes.container} />
        </div>
      </Parallax> */}
      <SectionIntro />
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <div id="about">
            #about
          </div>
          <div id="history">#history</div>
          <div id="people">#회장단</div>
          <SectionPeople />
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}