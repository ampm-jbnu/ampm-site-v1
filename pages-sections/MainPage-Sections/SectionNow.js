import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/custom/pages/mainSections/nowStyle";

const useStyles = makeStyles(styles);

export default function SectionNow() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.contentWrapper}>
          <div
            className={classes.content}
            style={{
              backgroundImage: "url('/img/main/now.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <div className={classes.overlay}>
              <GridContainer style={{width: "100%"}}>
                <GridItem
                  xs={12}
                  sm={12}
                  md={4}
                  className={classes.captionWrapper}
                >
                  <div className={classes.caption}>
                    3
                    <span className={classes.captionSmall}>
                      {" "}
                      년째 <strong>AM:PM</strong>을 통해
                    </span>
                  </div>
                </GridItem>

                <GridItem
                  xs={12}
                  sm={12}
                  md={4}
                  className={classes.captionWrapper}
                >
                  <div className={classes.caption}>
                    87
                    <span className={classes.captionSmall}>
                      {" "}
                      명의 <strong>학생</strong>들이
                    </span>
                  </div>
                </GridItem>
                <GridItem
                  xs={12}
                  sm={12}
                  md={4}
                  className={classes.captionWrapper}
                >
                  <div className={classes.caption}>
                    15
                    <span className={classes.captionSmall}>
                      {" "}
                      개의 <strong>프로젝트</strong>를 진행했습니다.
                    </span>
                  </div>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.space50} />
      <Button
        className={classes.textButton}
        style={{
          color: "#2997ff"
        }}
        simple
        href={"/projects"}
        target="_self"
      >
        {"더 알아보기"}&nbsp;&nbsp;&nbsp;❯
      </Button>
    </div>
  );
}
