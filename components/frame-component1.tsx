import type { NextPage } from "next";
import { Button } from "@mui/material";
import styles from "./frame-component1.module.css";

type FrameComponent1Type = {
  month?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ month }) => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.group}>
        <div className={styles.groupChild} />
        <div className={styles.month}>
          <div className={styles.month1}>{month}</div>
          <div className={styles.thereAreMany}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </div>
        </div>
        <div className={styles.startFrame}>
          <div className={styles.getConsultation} />
          <Button
            className={styles.startFrameChild}
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
    </div>
  );
};

export default FrameComponent1;
