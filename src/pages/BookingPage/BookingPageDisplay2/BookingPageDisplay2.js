import clsx from "clsx";
import Button from "~/components/Button/Button";
import Text from "~/components/Text/Text";
import ConfirmationNotification from "../ConfirmationNotification/ConfirmationNotification";
import styles from "./BookingPageDisplay2.module.scss";
import { useEffect, useState } from "react";

BookingPageDisplay2.propTypes = {};

function BookingPageDisplay2({
  request,
  setRequest,
  setPart,
  handleSubmit,
  displayConfirmation,
  setDisplayConfirmation,
  isSubmit,
  setIsSubmit,
  name,
  setName,
  phone,
  setPhone,
}) {
  const [isErrorName, setIsErrorName] = useState(false);
  const [isErrorPhone, setIsErrorPhone] = useState(false);

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);

    if (!value.trim()) {
      setIsErrorName(true);
    } else {
      setIsErrorName(false);
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(value)) {
      setIsErrorPhone(true);
    } else {
      setIsErrorPhone(false);
    }
  };

  return (
    <div className={clsx(styles.wrapper, "container")}>
      <Text title>Almost done!</Text>
      <div className={clsx(styles.form)}>
        <div className={clsx(styles.name, styles.inputArea)}>
          <label htmlFor="name">
            <Text cardTitle>Name</Text>
          </label>

          <p
            className={clsx(styles.error)}
            style={{ color: isErrorName ? "red" : "black" }}
          >
            Please enter your name.
          </p>

          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>

        <div className={clsx(styles.phone, styles.inputArea)}>
          <label htmlFor="phone">
            <Text cardTitle>Phone</Text>
          </label>

          <p
            className={clsx(styles.error)}
            style={{ color: isErrorPhone ? "red" : "black" }}
          >
            Please enter a valid phone number (10 digits)
          </p>

          <input
            type="text"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
          />
        </div>

        <div className={clsx(styles.comment, styles.inputArea)}>
          <label>
            <Text cardTitle>Special Requests (optional)</Text>
          </label>
          <textarea
            type="text"
            placeholder="Enter comment..."
            value={request}
            onChange={(e) => {
              setRequest(e.target.value);
            }}
          />
        </div>
      </div>

      {isSubmit ? (
        <Button className={clsx(styles.submitBtn)} to={"/"}>
          Back to homepage
        </Button>
      ) : (
        <Button
          className={clsx(styles.submitBtn)}
          onClick={(e) => {
            if (!isErrorName && !isErrorPhone) {
              handleSubmit(e);
            }
          }}
        >
          Submit
        </Button>
      )}

      {displayConfirmation && (
        <div className={clsx(styles.confirmationNotification)}>
          <ConfirmationNotification
            setDisplayConfirmation={setDisplayConfirmation}
          />
        </div>
      )}
    </div>
  );
}

export default BookingPageDisplay2;
