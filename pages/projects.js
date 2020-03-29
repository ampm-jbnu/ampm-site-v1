import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import styles from "assets/jss/custom/pages/pressPage";
import SectionComming from "pages-sections/Global-Sections/SectionComming";

const useStyles = makeStyles(styles);

export default function Projects(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        brand="AM:PM"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "none"
        }}
        {...rest}
      />
      <SectionComming />
    </div>
  );
}