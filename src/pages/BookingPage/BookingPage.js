import clsx from "clsx";
import { useState } from "react";
import { Row } from "react-bootstrap";

import Button from "~/components/Button/Button";
import Text from "~/components/Text/Text";
import styles from "./BookingPage.module.scss";
import ConfirmationNotification from "./ConfirmationNotification/ConfirmationNotification";
import DateComponent from "./DateComponent/DateComponent";
import GuestComponent from "./GuestComponent/GuestComponent";
import TableComponent from "./TableComponent/TableComponent";
import TimeComponent from "./TimeComponent/TimeComponent";

BookingPage.propTypes = {};

function BookingPage(props) {
  const [date, setDate] = useState(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0];

    return formattedDate;
  });

  const [time, setTime] = useState("17:00");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [table, setTable] = useState([]);
  const [booking, setBooking] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [displayConfirmation, setDisplayConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBooking = {
      date: date,
      time: time,
      numberOfGuests: numberOfGuests,
      table: table,
    };
    setBooking(newBooking);
    setIsSubmit(true);
    setDisplayConfirmation(true);
  };

  return (
    <div className={clsx(styles.wrapper, "container")}>
      <Text title>Book a Table</Text>
      <form className={clsx(styles.form)}>
        <div className={clsx(styles.dateTimeGuest)}>
          <div className={clsx(styles.date)}>
            <DateComponent date={date} setDate={setDate} />
          </div>

          <div className={clsx(styles.time)}>
            <TimeComponent setTime={setTime} />
          </div>

          <div className={clsx(styles.guest)}>
            <GuestComponent
              setNumberOfGuests={setNumberOfGuests}
              numberOfGuests={numberOfGuests}
            />
          </div>
        </div>

        <Row className={clsx(styles.table)}>
          <Text cardTitle>Chose a table</Text>
          <TableComponent setTable={setTable} />
        </Row>

        <Row className={clsx(styles.submit)}>
          {isSubmit ? (
            <Button className={clsx(styles.submitBtn)} to={"/"}>
              Back to Home
            </Button>
          ) : (
            <Button
              className={clsx(styles.submitBtn)}
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </Button>
          )}
        </Row>
      </form>

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

export default BookingPage;
