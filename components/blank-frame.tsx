import type { NextPage } from "next";
import styles from "./blank-frame.module.css";

const BlankFrame: NextPage = () => {
  return (
    <section className={styles.blankFrame}>
      <div className={styles.parentFrame}>
        <div className={styles.thereAreMany}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour.
        </div>
        <div className={styles.digitalMarketingSegment}>
          <div className={styles.digitalMarketingSegmentChild} />
          <div className={styles.vectorStrokeDigit}>
            <div className={styles.realResultsGroup}>
              <h1 className={styles.realPeopleReal}>
                Real People, Real Results
              </h1>
              <div className={styles.nA} />
            </div>
          </div>
          <div className={styles.nA1}>
            <div className={styles.nA2}>
              <div className={styles.nA3}>
                <img
                  className={styles.groupIcon}
                  loading="eager"
                  alt=""
                  src="/group.svg"
                />
                <div className={styles.thereAreMany1}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </div>
              </div>
              <div className={styles.nA4}>
                <img
                  className={styles.groupIcon1}
                  loading="eager"
                  alt=""
                  src="/group.svg"
                />
                <div className={styles.thereAreMany2}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour.
                </div>
              </div>
              <img
                className={styles.groupIcon2}
                loading="eager"
                alt=""
                src="/group.svg"
              />
            </div>
          </div>
          <div className={styles.financeVectorFrame}>
            <div className={styles.vectorFrame}>
              <div className={styles.strokeSegment}>
                <img
                  className={styles.vectorStrokeIcon}
                  loading="eager"
                  alt=""
                  src="/vector-stroke.svg"
                />
                <div className={styles.digitalMarketing}>Digital Marketing</div>
              </div>
              <div className={styles.strokeSegment1}>
                <img
                  className={styles.vectorIcon}
                  loading="eager"
                  alt=""
                  src="/vector.svg"
                />
                <div className={styles.segment}>Segment</div>
              </div>
              <div className={styles.strokeSegment2}>
                <img
                  className={styles.vectorIcon1}
                  loading="eager"
                  alt=""
                  src="/vector-1.svg"
                />
                <div className={styles.lighthouse}>Lighthouse</div>
              </div>
            </div>
            <div className={styles.line}>
              <div className={styles.lineChild} />
              <div className={styles.lineItem} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlankFrame;
