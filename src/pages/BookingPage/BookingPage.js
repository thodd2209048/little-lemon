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
import CommentComponent from "./CommentComponent/CommentComponent";

BookingPage.propTypes = {};

function BookingPage(props) {
  const currentDate = new Date();
  const today = currentDate.toISOString().split("T")[0];

  const [date, setDate] = useState(today);
  const [booking, setBooking] = useState({});
  const [time, setTime] = useState("17:00");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [request, setRequest] = useState("");
  const [table, setTable] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);
  const [displayConfirmation, setDisplayConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBooking = {
      date: date,
      time: time,
      numberOfGuests: numberOfGuests,
      request: request,
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

        <Row className={clsx(styles.table)}>
          <TableComponent setTable={setTable} />
        </Row>

        <div className={clsx(styles.comment)}>
          <CommentComponent request={request} setRequest={setRequest} />
        </div>

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
