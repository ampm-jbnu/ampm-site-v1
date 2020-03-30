import React from 'react';

import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/custom/components/timelineItemStyle.js";

const useStyles = makeStyles(styles);

export default function TimelineItem(props) {
  const { data } = props;
  const classes = useStyles();

  return (
    <div className="classes.container">
      <h4>{data.text}</h4>
      <p>{data.date}</p>
    </div>
  );
}