import { useState } from "react";
import { toast } from "react-hot-toast";

import styles from "./SignUp.module.css";
import Button from "../Button/Button";

function SignUp() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (isValid === false) {
      validateEmail(e.target.value);
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setIsValid(true);
      setEmail("");
      toast.success("Thanks for signing up.");
    } else {
      setIsValid(false);
    }
  };

  return (
    <div id="contact" className={styles.signUpContainer}>
      <div className={styles.textWrap}>
        <p className={styles.paragraph}>35,000+ already joined</p>
        <h3 className={styles.heading}>
          Stay up-to-date with what we’re doing
        </h3>
      </div>

      <form noValidate className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputWrap}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
            className={`${styles.input} ${!isValid ? styles.error : ""}`}
            value={email}
            onChange={handleEmailChange}
          />
          {!isValid && (
            <span className={styles.errorMsg}>
              Whoops, make sure it’s an email
            </span>
          )}
        </div>
        <Button type="contact">Contact Us</Button>
      </form>
    </div>
  );
}

export default SignUp;
