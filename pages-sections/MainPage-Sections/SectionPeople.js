import React from "react";
import ReactDOM from "react-dom";
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
      <div className={classes.container}>
        <h2 className={classes.title}>Our Managers</h2>
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
                    <p className={classes.quest}>
                      {`'돌돌 박사': 오! 그래 네가 왔구나! 지금 정말 시간이 없어. 19시까지 답을 제출하지 못한다면 개발자들은 다 실직하게 될꺼라구! 시저의 코딩 실력이 점점 나보다 좋아지는거 같아. (콰과광) .....?!?!?!?!?\n'시저': 시저어어어어어어어어어어어어어ㅓ어어어어ㅓ! 시저시저시저\n'돌돌': 맙소사! 시저에게 내 위치를 들켰어 지금 당장 시저가 해킹한 '큐어' 시스템에 접근해서 인간지능 능력을 삭제해야해 너도 취직하고 싶잖아?\n\n'돌돌'은 개발자의 미래를 두려워하고 있다. '시저'를 키워왔던 '돌돌'은 '시저'가 자기만의 언어로 항상 되뇌이던 말이 '큐어' 시스템의 암호라고 믿고 있다.\n\n만약 당신이 19시까지 답을 찾지 못한다면 미래에 인간 개발자들은 사라질 것이다. \n\n\n시저는 자기만의 언어인 시ㅡ언어를 쓴다. 시저가 예전에 '돌돌'이 코딩하다가 힘들어 했을 때 이렇게 말했다고 한다.\n\n'시저': ZDNH XS. BRX KDYH WR FRGH.(Wake up. You have to code)\n\n\nEXJV! WRJHWKHU! GLVJXVWLQJ!! 을 해석해서 제출하라`}
                    </p>
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
