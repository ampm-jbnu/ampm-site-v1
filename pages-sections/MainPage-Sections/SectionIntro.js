import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Link, animateScroll as scroll } from "react-scroll";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/custom/pages/mainSections/introStyle";

import image from "assets/img/ampm_header01.jpg";

const useStyles = makeStyles(styles);

export default function SectionIntro(props) {
  const classes = useStyles();

  return (
    <div
      className={classes.pageHeader}
      style={{
        backgroundImage: "url(" + image + ")",
        backgroundSize: "cover",
        backgroundPosition: "top center"
      }}
    >
      {/* <Parallax image={require("assets/img/ampm_header01.jpg")}>
        <div className={classes.parallax}>
          <RecruitBanner className={classes.container} />
        </div>
      </Parallax> */}
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <span className={classes.desc}>모집기간: 2020. 03. 27 ~ 2020. 04. 05</span>
            <h3 className={classes.title}>
              <strong>AM:PM </strong>3기 모집
            </h3>
            <Button
              className={classes.textButton}
              style={{ color: "#2997ff" }}
              simple
            >
              <u>지원자격 및 문의&nbsp;&nbsp;&nbsp;❯</u>
            </Button>
            <h5 className={classes.subtitle}>
              To be Algorithm Master & Programming Master
            </h5>
            <GridContainer>
              <GridItem
                xs={12}
                sm={6}
                md={6}
                className={classes.contentWrapper}
              >
                <Link
                  activeClass="active"
                  to="about"
                  spy={false}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className={classes.link}
                >
                  <Button
                    className={classes.button}
                    style={{
                      color: "white",
                      backgroundColor: "rgba(125, 125, 127, 0.8)"
                    }}
                    round
                  >
                    {"동아리 소개"}&nbsp;&nbsp;&nbsp;❯
                  </Button>
                </Link>
              </GridItem>
              <GridItem
                xs={12}
                sm={6}
                md={6}
                className={classes.contentWrapper}
              >
                <div className={classes.link}>
                  <Button
                    className={classes.button}
                    style={{
                      color: "white",
                      backgroundColor: "rgba(0, 113, 227, 0.9)"
                    }}
                    round
                    href={"https://forms.gle/VfDFxzdXz9oc9rJEA"}
                    target="_blank"
                  >
                    {"가입 신청하기"}&nbsp;&nbsp;&nbsp;❯
                  </Button>
                </div>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}