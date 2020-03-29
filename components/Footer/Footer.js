/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
import Mail from "@material-ui/icons/Mail";

import styles from "assets/jss/custom/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont, containerStyle } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses} style={containerStyle}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <span className={classes.block}><LocationOn fontSize={"inherit"}/>{"  "}전북 전주시 덕진구 백제대로 567, 전북대학교 공과대학 5호관 315</span>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <span className={classes.block}><Mail fontSize={"inherit"}/>{"  "}ampm.jbnu.315@gmail.com</span>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()}. AM:PM. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
  containerStyle: PropTypes.object
};
