/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import { animateScroll as scroll } from "react-scroll"

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/custom/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Notice"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          dropdownList={[
            <Link href="/notice/info">
              <a className={classes.dropdownLink}>Info</a>
            </Link>,
            <Link href="/notice/contests">
              <a className={classes.dropdownLink}>Contests</a>
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/activities"
          color="transparent"
          target="_self"
          className={classes.navLink}
        >
          Activities
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/projects"
          color="transparent"
          target="_self"
          className={classes.navLink}
        >
          Projects
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/press"
          color="transparent"
          target="_self"
          className={classes.navLink}
        >
          Press
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
          onClick={scroll.scrollToBottom}
        >
          Contact
        </Button>
      </ListItem>
    </List>
  );
}
