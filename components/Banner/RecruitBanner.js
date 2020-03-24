import React, { useEffect } from "react";

import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import { Link, animateScroll as scroll } from "react-scroll";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js"
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";
import ArrowForward from "@material-ui/icons/ArrowForward";

import styles from "assets/jss/custom/components/recruitBannerStyle";

const useStyles = makeStyles(styles);

export default function RecruitBanner(props) {
  const classes = useStyles();

  return (
    <div className={classNames(classes.container, props.className)}>
      <GridContainer>
        <GridItem xs={12} sm={10} md={6}>
          <Card className={classNames(classes.banner)}>
            <CardHeader className={classes.bannerHeader}>
              <h4 className={classes.bannerTitle}>
                AM:PM{" "}
                <span style={{ color: "rgba(255, 158, 27, 1)" }}>
                  3기 신입 부원
                </span>{" "}
                모집
              </h4>
            </CardHeader>
            <CardBody className={classes.bannerBody}>
              <div
                className={classNames(classes.button, classes.textWrapper)}
                style={{ borderRadius: "10px", backgroundColor: "rgba(255, 160, 0, 0.8)"}}  
              >
                모집기간: 2020. 03. 26 ~ 2020. 04. 06
              </div>
              <div>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <div className={classes.contentWrapper}>
                      <img
                        className={classes.icon}
                        src={require("assets/img/main/book.png")}
                      />
                    </div>
                    <div className={classes.textWrapper}>
                      <h5 className={classes.bannerText}>{"스터디"}</h5>
                    </div>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <div className={classes.contentWrapper}>
                      <img
                        className={classes.icon}
                        src={require("assets/img/main/hackathon.png")}
                      />
                    </div>
                    <div className={classes.textWrapper}>
                      <h5 className={classes.bannerText}>{"대외활동"}</h5>
                    </div>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <div className={classes.contentWrapper}>
                      <img
                        className={classes.icon}
                        src={require("assets/img/main/coding.png")}
                      />
                    </div>
                    <div className={classes.textWrapper}>
                      <h5 className={classes.bannerText}>{"프로젝트"}</h5>
                    </div>
                  </GridItem>
                </GridContainer>
                <div className={classes.textWrapper}>
                  <h5 className={classes.bannerSubTitle}>
                    AM:PM(Algorithm Master & Project Master)은 전북대학교
                    소프트웨어공학과의 학술동아리입니다.
                  </h5>
                </div>
                <GridContainer>
                  <GridItem
                    xs={12}
                    sm={12}
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
                          color: "black",
                          backgroundColor: "rgba(227, 227, 227, 0.8)"
                        }}
                        round
                      >
                        {"동아리 소개 "}
                        <ArrowForward color={"inherit"} fontSize={"inherit"} />
                      </Button>
                    </Link>
                  </GridItem>
                  <GridItem
                    xs={12}
                    sm={12}
                    md={6}
                    className={classes.contentWrapper}
                  >
                    <div className={classes.link}>
                      <Button
                        className={classes.button}
                        style={{
                          color: "white",
                          backgroundColor: "rgba(255, 94, 0, 0.8)"
                        }}
                        round
                        href={"https://forms.gle/VfDFxzdXz9oc9rJEA"}
                        target="_blank"
                      >
                        {"가입 신청하기 "}
                        <ArrowForward color={"inherit"} fontSize={"inherit"} />
                      </Button>
                    </div>
                  </GridItem>
                </GridContainer>
              </div>
            </CardBody>
          </Card>
          {/* <div className={classes.brand}>
                <h1 className={classes.title}>We Are AM:PM</h1>
                <h3 className={classes.subtitle}>
                  AM:PM(Algorithm Master & Project Master)은 전북대학교
                  소프트웨어공학과의 학술동아리입니다.
                </h3>
              </div> */}
        </GridItem>
      </GridContainer>
    </div>
  );
}