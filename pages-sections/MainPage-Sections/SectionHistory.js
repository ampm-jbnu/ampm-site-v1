import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import styles from "assets/jss/custom/pages/mainSections/historyStyle.js";
import Timeline from "components/Timeline/Timeline";

import historyData from "assets/data/history";

const useStyles = makeStyles(styles);

export default function SectionHistory() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2 className={classes.title}>Our History</h2>
        <div className={classes.space50} />
        <img className={classes.img} src="/img/main/history.jpg" />
        {/* <Timeline data={historyData} /> */}
        <div className={classes.space50} />
      </div>
    </div>
  );
}
