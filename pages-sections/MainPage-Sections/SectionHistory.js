import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import styles from "assets/jss/custom/pages/mainSections/historyStyle.js";
import Timeline from "components/Timeline/Timeline";

import historyImg from "assets/img/main/history.jpg";

import historyData from "assets/data/history";

const useStyles = makeStyles(styles);

export default function SectionHistory() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2 className={classes.title}>Our History</h2>
        <div className={classes.space50} />
        <img className={classes.img} src={historyImg} />
        {/* <Timeline data={historyData} /> */}
        <div className={classes.space50} />
      </div>
    </div>
  );
}
