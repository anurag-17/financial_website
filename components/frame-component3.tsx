import type { NextPage } from "next";
import styles from "./frame-component3.module.css";

const FrameComponent3: NextPage = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameFinanceAccounting}>02</div>
      <div className={styles.groupContactInfo}>
        <b className={styles.accountingAndBookkeeping}>
          Accounting and Bookkeeping
        </b>
        <div className={styles.stayOnTop}>
          Stay on top of your finances without the headache. Our expert team
          provides meticulous accounting and bookkeeping services, ensuring that
          your financial records are accurate, up-to-date, and compliant.
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <img
          className={styles.layer2Icon}
          loading="eager"
          alt=""
          src="/layer-2@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent3;
