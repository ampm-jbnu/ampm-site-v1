import React, { useEffect } from "react";

import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import RecruitBanner from "components/Banner/RecruitBanner";

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
        <RecruitBanner className={classes.container} />
      </div>
    );
}