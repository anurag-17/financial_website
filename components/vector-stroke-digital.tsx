import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./vector-stroke-digital.module.css";

type VectorStrokeDigitalType = {
  financeAccountingGroup?: string;
  payrollManagement?: string;
  efficientlyManageYourTeam?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
};

const VectorStrokeDigital: NextPage<VectorStrokeDigitalType> = ({
  financeAccountingGroup,
  payrollManagement,
  efficientlyManageYourTeam,
  propGap,
  propWidth,
  propWidth1,
}) => {
  const lineSeparatorStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
      width: propWidth,
    };
  }, [propGap, propWidth]);

  const efficientlyManageYourStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className={styles.vectorStrokeDigital}>
      <div className={styles.lineSeparator} style={lineSeparatorStyle}>
        <div className={styles.financeAccountingGroup}>
          {financeAccountingGroup}
        </div>
        <b className={styles.payrollManagement}>{payrollManagement}</b>
      </div>
      <div className={styles.contactUsFrame}>
        <div className={styles.fullNameInput}>
          <div
            className={styles.efficientlyManageYour}
            style={efficientlyManageYourStyle}
          >
            {efficientlyManageYourTeam}
          </div>
          <div className={styles.getStartedButton}>
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

export default VectorStrokeDigital;
