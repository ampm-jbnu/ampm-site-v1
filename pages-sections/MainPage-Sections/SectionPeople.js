import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/custom/pages/mainSections/peopleStyle.js";

import manager1 from "assets/img/main/hyunwoo.jpg";
import manager2 from "assets/img/main/seokarm.jpg";

const useStyles = makeStyles(styles);

export default function SectionPeople() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2>Here is our managers</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={manager1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                김현우
                <br />
                <small className={classes.smallTitle}>3기 회장</small>
              </h4>
              {/* <CardBody> */}
              {/* <p className={classes.description}>
                </p> */}
              {/* </CardBody> */}
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  href="https://www.facebook.com/profile.php?id=100006561632458"
                  target="_blank"
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
                <Button
                  justIcon
                  href="https://github.com/gusdn6901"
                  target="_blank"
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-github"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={manager2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                문석암
                <br />
                <small className={classes.smallTitle}>3기 부회장</small>
              </h4>
              {/* <CardBody> */}
              {/* <p className={classes.description}>
                </p> */}
              {/* </CardBody> */}
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  href="https://www.facebook.com/sukarm.moon"
                  target="_blank"
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
                <Button
                  justIcon
                  href="https://github.com/mon823"
                  target="_blank"
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-github"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
