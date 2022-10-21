import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/custom/pages/mainSections/aboutStyle";

const useStyles = makeStyles(styles);

export default function SectionAbout() {
  const classes = useStyles();
  return (
    <div id="about" className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={5} lg={5}>
            <div className={classes.content}>
              <h2 className={classes.title}>About</h2>
              <h6 className={classes.subTitle}>
                To be Algorithm Master & Programming Master
              </h6>
              <h5>
                &nbsp;AM:PM은 Algorithm Master & Programming Master의 줄임말로
                전북대학교 소프트웨어공학과의 유일무이한 학술동아리입니다.
              </h5>
              <h5>
                &nbsp;소프트웨어공학을 전공하는 학생들끼리 코딩 실력을 연마하며
                팀을 구성해 창의적인 아이디어를 기반으로 새로운 가치를 창출하고
                개발의 장이 되는 동아리입니다.
              </h5>
            </div>
          </GridItem>
          <GridItem
            xs={12}
            sm={12}
            md={6}
            lg={6}
            className={classes.imgContentWrapper}
          >
            <img
              src="/img/main/about.jpg"
              alt="about"
              className={classes.imgRounded + " " + classes.img}
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
