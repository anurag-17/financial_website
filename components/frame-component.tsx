import type { NextPage } from "next";
import FrameComponent1 from "./frame-component1";
import styles from "./frame-component.module.css";

const FrameComponent: NextPage = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.getAFreeFinancialPlanningParent}>
        <h1 className={styles.getAFree}>
          Get a Free Financial Planning Consultation
        </h1>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.frameGroup}>
        <FrameComponent1 month="$50/Month" />
        <FrameComponent1 month="$99/Month" />
        <FrameComponent1 month="$145/Month" />
      </div>
    </section>
  );
};

export default FrameComponent;
