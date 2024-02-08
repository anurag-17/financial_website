import type { NextPage } from "next";
import styles from "./frame-component2.module.css";

const FrameComponent2: NextPage = () => {
  return (
    <div className={styles.lineParent}>
      <div className={styles.line}>
        <div className={styles.getConsultation}>05</div>
        <div className={styles.humanResourceManagementParent}>
          <b className={styles.humanResourceManagement}>
            Human Resource Management
          </b>
          <b className={styles.textBlock}>{`  `}</b>
        </div>
      </div>
      <div className={styles.textBlock1}>
        <div className={styles.textBlock2}>
          <div
            className={styles.peopleAreThe}
          >{`People are the heart of any business. We offer a range of HR services - from recruitment & staffing, performance monitoring & management, to comprehensive HR solutions. Let us help you create a team that's aligned with your vision and values.`}</div>
          <div className={styles.textBlockInner}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <img
                className={styles.layer2Icon}
                loading="eager"
                alt=""
                src="/layer-2@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
