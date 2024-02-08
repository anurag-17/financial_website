import type { NextPage } from "next";
import { Button } from "@mui/material";
import styles from "./frame-component4.module.css";

const FrameComponent4: NextPage = () => {
  return (
    <header className={styles.getaFreeConsultationParent}>
      <div className={styles.getaFreeConsultation}>
        <h2 className={styles.financeAccounting}>Finance Accounting</h2>
        <div className={styles.homeServicesAboutUsParent}>
          <div className={styles.homeServicesAboutContainer}>
            Home
            <span className={styles.span}>{` `}</span>Services
            <span className={styles.span1}>{` `}</span>About Us
          </div>
          <Button
            className={styles.passagesOfLoremIps}
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "14",
              background: "#64b900",
              borderRadius: "3px",
              "&:hover": { background: "#64b900" },
              width: 117,
              height: 38,
            }}
          >
            Contact Us
          </Button>
        </div>
      </div>
      <div className={styles.group} />
    </header>
  );
};

export default FrameComponent4;
