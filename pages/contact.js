import styles from "../styles/contact.module.css";
import Image from "next/image";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactCard}>
        <form
          id="fs-frm"
          name="simple-contact-form"
          action="https://formspree.io/f/xyyvklyv"
          method="post"
          className={styles.form}
        >
          <fieldset className={styles.input} id="fs-frm-inputs">
            <label htmlFor="full-name">Full Name</label>
            <input
              className={styles.inputBar}
              type="text"
              name="name"
              id="full-name"
              placeholder=""
              required=""
            />
            <label htmlFor="email-address">Email Address</label>
            <input
              type="email"
              name="_replyto"
              id="email-address"
              placeholder="email@domain.tld"
              required=""
              className={styles.inputBar}
            />
            <label htmlFor="message">Message</label>
            <textarea
              rows="5"
              name="message"
              id="message"
              placeholder=""
              required=""
              className={styles.inputBar}
            ></textarea>
            <input
              type="hidden"
              name="_subject"
              id="email-subject"
              value="Contact Form Submission"
              className={styles.inputBar}
            />
          </fieldset>
          <input className={styles.submitButton} type="submit" value="Submit" />
        </form>
        <div className={styles.contactIcon}>
          <Image src="/email-svgrepo-com.svg" alt="arian" layout="fill" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
