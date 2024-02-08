import type { NextPage } from "next";
import Head from "next/head";
import FrameComponent4 from "../components/frame-component4";
import GetStarted from "../components/get-started";
import ContactUs from "../components/contact-us";
import VectorStrokeDigital from "../components/vector-stroke-digital";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent from "../components/frame-component";
import BlankFrame from "../components/blank-frame";
import FinanceFrame from "../components/finance-frame";
import styles from "./index.module.css";

const Desktop: NextPage = () => {
  return (
    <div className={styles.desktop}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
      </div>
      <section className={styles.headerFrame}>
        <div className={styles.headerFrameChild} />
        <FrameComponent4 />
        <GetStarted />
      </section>
      <ContactUs />
      <section className={styles.headerGroup}>
        <div className={styles.headerGroupChild} />
        <div className={styles.frameText}>
          <div className={styles.frameGroup}>
            <h1 className={styles.yourFinancialToolkit}>
              Your Financial Toolkit
            </h1>
            <div className={styles.frameMonth} />
          </div>
        </div>
        <div className={styles.groupGetStarted}>
          <VectorStrokeDigital
            financeAccountingGroup="01"
            payrollManagement="Payroll Management"
            efficientlyManageYourTeam="Efficiently manage your team's payments with our comprehensive payroll services. Whether you have a small team or a large workforce, our system ensures timely and accurate payroll processing, letting you focus on what you do best."
          />
          <FrameComponent3 />
          <VectorStrokeDigital
            financeAccountingGroup="03"
            payrollManagement="Business Consultancy"
            efficientlyManageYourTeam="Navigate the complexities of the business world with our expert guidance. From market insights to strategic planning, our consultancy services are designed to provide actionable recommendations, fueling your business growth."
            propGap="38px"
            propWidth="unset"
            propWidth1="1134px"
          />
          <VectorStrokeDigital
            financeAccountingGroup="04"
            payrollManagement="Data Analytics"
            efficientlyManageYourTeam="Unlock the power of data-driven decision-making. Our data analytics services delve deep into your business metrics, offering insights and patterns that can redefine your strategies and give you a competitive edge."
            propGap="20px"
            propWidth="216px"
            propWidth1="1110px"
          />
          <FrameComponent2 />
        </div>
      </section>
      <FrameComponent />
      <BlankFrame />
      <FinanceFrame />
    </div>
  );
};

export default Desktop;
