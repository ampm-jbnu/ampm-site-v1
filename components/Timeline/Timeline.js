import React from 'react';

import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/custom/components/timelineStyle.js";
import TimelineItem from './TimelineItem';

const useStyles = makeStyles(styles);

export default function Timeline(props) {
    const { data } = props;
    const classes = useStyles();
    
    if(data.length > 0) {
        return (
            <div className={classes.container}>
                {
                    data.map((data, idx) => (
                      <TimelineItem data={data} key={idx} />  
                    ))
                }

            </div>
        );
    }
}