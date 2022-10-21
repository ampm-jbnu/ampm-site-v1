import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/custom/pages/mainSections/activitiesStyle";

const useStyles = makeStyles(styles);

export default function SectionActivities() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2 className={classes.title}>Our Activities</h2>
        {/* <hr className={classes.titleLine} /> */}
        <div className={classes.space30} />
        <br />
        <GridContainer>
          <GridItem xs={12} sm={12} md={3} className={classes.contentWrapper}>
            <div
              className={classes.content}
              style={{
                backgroundImage: "url('/img/main/study.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "top center"
              }}
            >
              <div className={classes.captionWrapper}>
                <div className={classes.caption}>Study</div>
              </div>

              <div className={classes.blurWrapper}>
                <div
                  className={classes.blur}
                  style={{
					backgroundImage: "url('/img/main/study.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "top center"
                  }}
                />
                <div className={classes.overlay}>
                  <div className={classes.overlayTitle}>
                    프로그래밍 관련
                    <br />
                    <strong>스터디</strong> 및 <strong>세미나</strong>
                  </div>
                  <div className={classes.overlayCaption}>
                    알고리즘 스터디<br/>
                    웹 / 앱 스터디<br/>
                    정기 세미나
                  </div>
                </div>
              </div>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={3} className={classes.contentWrapper}>
            <div
              className={classes.content}
              style={{
                backgroundImage: "url('/img/main/project.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "top center"
              }}
            >
              <div className={classes.captionWrapper}>
                <div className={classes.caption}>Project</div>
              </div>
              <div className={classes.blurWrapper}>
                <div
                  className={classes.blur}
                  style={{
                	backgroundImage: "url('/img/main/project.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "top center"
                  }}
                />
                <div className={classes.overlay}>
                  <div className={classes.overlayTitle}>
                    자유로운 <strong>대&middot;내외</strong>
                    <br />
                    <strong>프로젝트</strong> 진행
                  </div>
                  <div className={classes.overlayCaption}>
                    실제 아이디어 구현<br/>
                    실무 능력 & 개발 경험 향상<br/>
                    팀 활동을 통한 협업경험
                  </div>
                </div>
              </div>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={3} className={classes.contentWrapper}>
            <div
              className={classes.content}
              style={{
				backgroundImage: "url('/img/main/competition.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "top center"
              }}
            >
              <div className={classes.captionWrapper}>
                <div className={classes.caption}>Competition</div>
              </div>

              <div className={classes.blurWrapper}>
                <div
                  className={classes.blur}
                  style={{
					backgroundImage: "url('/img/main/competition.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "top center"
                  }}
                />
                <div className={classes.overlay}>
                  <div className={classes.overlayTitle}>
                    역량 강화를 위한
                    <br/>
                    <strong>다양한 대회</strong> 진행
                  </div>
                  <div className={classes.overlayCaption}>
                    단합을 위한 공학 체전<br/>
                    알고리즘 대회 + 구데기컵<br/>
                    하반기 정기 해커톤
                  </div>
                </div>
              </div>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={3} className={classes.contentWrapper}>
            <div
              className={classes.content}
              style={{
				backgroundImage: "url('/img/main/support.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "top center"
              }}
            >
              <div className={classes.captionWrapper}>
                <div className={classes.caption}>Support</div>
              </div>
              <div className={classes.blurWrapper}>
                <div
                  className={classes.blur}
                  style={{
					backgroundImage: "url('/img/main/support.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "top center"
                  }}
                />
                <div className={classes.overlay}>
                  <div className={classes.overlayTitle}>
                    원활한 활동을
                    <br />
                    위한 <strong>환경 조성</strong>
                  </div>
                  <div className={classes.overlayCaption}>
                    편안하고 안락한 동아리방<br/>
                    다양한 정보 제공<br/>
                    교재 및 학습 도구 제공
                  </div>
                </div>
              </div>
            </div>
          </GridItem>
        </GridContainer>
        <div className={classes.space50} />
        <Button
          className={classes.textButton}
          style={{
            color: "#06c"
          }}
          simple
          href={"/activities"}
          target="_self"
        >
          {"더 알아보기"}&nbsp;&nbsp;&nbsp;❯
        </Button>
      </div>
    </div>
  );
}
