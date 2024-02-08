import type { NextPage } from "next";
import { Button } from "@mui/material";
import styles from "./get-started.module.css";

const GetStarted: NextPage = () => {
  return (
    <div className={styles.getStarted}>
      <div className={styles.vectorStrokeWrapper}>
        <div className={styles.vectorStroke}>
          <div className={styles.digitalMarketing}>
            <div className={styles.financeAccounting}>
              <div className={styles.followUs}>
                <h1 className={styles.financeIsCommittedContainer}>
                  <p className={styles.financeIsCommittedToDelive}>
                    <span className={styles.finance}>Finance</span>
                    <span className={styles.span}>{` `}</span>
                    <span className={styles.isCommittedTo}>
                      is committed to
                    </span>
                    <span className={styles.span1}>{` `}</span>
                    <span className={styles.delivering}>delivering</span>
                    <span className={styles.span2}>{` `}</span>
                    <span className={styles.excellence}>excellence</span>
                    <span className={styles.span3}>{` `}</span>
                    <span className={styles.and}>and</span>
                    <span className={styles.span4}>{` `}</span>
                    <span className={styles.addingValue}>adding value</span>
                    <span className={styles.span5}>{` `}</span>
                    <span>to the businesses</span>
                    <span className={styles.span6}>{` `}</span>
                  </p>
                  <p className={styles.weServe}>we serve.</p>
                </h1>
                <div className={styles.contactUs} />
                <div className={styles.contactUs1} />
                <div className={styles.contactUs2} />
                <div className={styles.contactUs3} />
              </div>
              <div className={styles.enterYourEmail} />
            </div>
            <div className={styles.message}>
              <div className={styles.financeGroupIs}>
                Finance Group is a multifaceted online business solutions
                provider, primarily serving other businesses
              </div>
              <Button
                className={styles.monthGroup}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#000",
                  fontSize: "18",
                  background: "#fff",
                  borderRadius: "5px",
                  "&:hover": { background: "#fff" },
                  width: 275,
                  height: 64,
                }}
              >{`Accounting & Bookkeeping`}</Button>
            </div>
          </div>
          <Button
            className={styles.vectorStrokeChild}
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "14",
              background: "#64b900",
              borderRadius: "3px",
              "&:hover": { background: "#64b900" },
              width: 160,
              height: 45,
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <Button
            className={styles.frameChild}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#000",
              fontSize: "18",
              background: "#fff",
              borderRadius: "5px",
              "&:hover": { background: "#fff" },
              width: 235,
              height: 64,
            }}
          >
            Payroll Management
          </Button>
        </div>
        <div className={styles.realPeopleRealResults}>
          <img
            className={styles.realPeopleRealResultsChild}
            loading="eager"
            alt=""
            src="/group-13@2x.png"
          />
          <Button
            className={styles.digitalMarketing1}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#000",
              fontSize: "18",
              background: "#fff",
              borderRadius: "5px",
              "&:hover": { background: "#fff" },
              height: 64,
            }}
          >
            Data Analytics
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
