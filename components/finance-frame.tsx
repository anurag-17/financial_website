import type { NextPage } from "next";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import styles from "./finance-frame.module.css";

const FinanceFrame: NextPage = () => {
  return (
    <footer className={styles.financeFrame}>
      <div className={styles.financeFrameChild} />
      <div className={styles.contactGroup}>
        <div className={styles.getStarted}>
          <div className={styles.accountingFrame}>
            <div className={styles.financeText}>
              <h2 className={styles.financeAccounting}>Finance Accounting</h2>
            </div>
            <div className={styles.financeGroupIs}>
              Finance Group is a multifaceted online business solutions
              provider, primarily serving other businesses.
            </div>
            <div className={styles.followUs}>
              <div className={styles.followUs1}>Follow Us:</div>
              <div className={styles.callMailInfofinanceco}>
                <img
                  className={styles.callMailInfofinancecoChild}
                  loading="eager"
                  alt=""
                  src="/group-8.svg"
                />
                <img
                  className={styles.callMailInfofinancecoItem}
                  loading="eager"
                  alt=""
                  src="/group-5.svg"
                />
                <img
                  className={styles.callMailInfofinancecoInner}
                  loading="eager"
                  alt=""
                  src="/group-6.svg"
                />
                <img
                  className={styles.groupIcon}
                  loading="eager"
                  alt=""
                  src="/group-7@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.fullNameEnteremail}>
            <div className={styles.message}>
              <div className={styles.contactUs}>Contact Us</div>
              <div className={styles.callUs01Container}>
                <p className={styles.callUs011234567890}>
                  <span className={styles.callUs}>Call Us:</span>
                  <span> +01 123 456 7890</span>
                </p>
                <p className={styles.mailUsInfofinancecom}>
                  <span className={styles.mailUs}>Mail Us:</span>
                  <span> info@finance.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contactForm}>
          <div className={styles.getStarted1}>Get Started</div>
          <form className={styles.getStartedCTA}>
            <div className={styles.frameGroupVectorStrokeSegm}>
              <TextField
                className={styles.fullNameInput}
                placeholder="Full Name"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#242424" },
                  "& .MuiInputBase-root": {
                    height: "39px",
                    backgroundColor: "#000",
                    borderRadius: "3px",
                    fontSize: "14px",
                  },
                  "& .MuiInputBase-input": { color: "#6a6a6a" },
                }}
              />
              <TextField
                className={styles.fullNameInput1}
                placeholder="Enter your email"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#242424" },
                  "& .MuiInputBase-root": {
                    height: "39px",
                    backgroundColor: "#000",
                    borderRadius: "3px",
                    fontSize: "14px",
                  },
                  "& .MuiInputBase-input": { color: "#6a6a6a" },
                }}
              />
            </div>
            <TextField
              className={styles.messageInput}
              placeholder="Message"
              variant="outlined"
              sx={{
                "& fieldset": { borderColor: "#242424" },
                "& .MuiInputBase-root": {
                  height: "116px",
                  backgroundColor: "#000",
                  borderRadius: "3px",
                  fontSize: "14px",
                },
                "& .MuiInputBase-input": { color: "#6a6a6a" },
              }}
            />
            <Button
              className={styles.getStartedCTAChild}
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
                height: 37,
              }}
            >
              Get Started
            </Button>
          </form>
        </div>
      </div>
      <div className={styles.textInputParent}>
        <div className={styles.textInput} />
        <div className={styles.financeAll}>
          © 2023 Finance | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default FinanceFrame;
