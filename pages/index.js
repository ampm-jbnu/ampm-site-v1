import React, { useEffect } from "react";
import Router from "next/router";

import classNames from "classnames";
import Link from "next/link"
import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js"

import styles from "assets/jss/custom/pages/indexPage";
import SectionBasics from "../pages-sections/Components-Sections/SectionBasics";

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
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/ampm_header01.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>We Are AM:PM</h1>
                <h3 className={classes.subtitle}>
                  AM:PM(Algorithm Master & Project Master)은 전북대학교 소프트웨어공학과의 학술동아리입니다.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <SectionBasics />
          <div id="about">
          hawe
          </div>
          <SectionBasics />
          <div id="about">
          hawee
          </div>
          <SectionBasics />
          <div id="about">
          hononoo
          </div>
          <SectionBasics />
        </div>
      </div>
    </div>
  )
}