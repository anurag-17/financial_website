import type { NextPage } from "next";
import styles from "./contact-us.module.css";

const ContactUs: NextPage = () => {
  return (
    <section className={styles.contactUs}>
      <div className={styles.fullName}>
        <div className={styles.enteryouremail}>
          <h1 className={styles.empoweringYouTo}>
            Empowering You to Achieve Your Financial Goals
          </h1>
          <div className={styles.enteryouremailChild} />
        </div>
        <div className={styles.therearemanyvariationsofpassag}>
          <div
            className={styles.financeGroupIs}
          >{`Finance Group is a multifaceted online business solutions provider, primarily serving other businesses. Our core strength lies in offering tailored services that encompass Payroll Management, Accounting & Bookkeeping, Business Consultancy, Data Analytics, and comprehensive Human Resources Management.`}</div>
          <div className={styles.byPartneringWith}>
            By partnering with our clients, we aim to streamline their
            operations, provide strategic insights, and foster growth. Whether
            it's ensuring accurate financial records, offering data-driven
            insights, or managing human resources, Beassist is committed to
            delivering excellence and adding value to the businesses we serve.
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.layer2Icon}
          loading="eager"
          alt=""
          src="/layer-2@2x.png"
        />
      </div>
    </section>
  );
};

export default ContactUs;
