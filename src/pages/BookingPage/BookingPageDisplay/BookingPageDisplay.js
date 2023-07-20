import clsx from "clsx";
import { Row } from "react-bootstrap";

import Button from "~/components/Button/Button";
import Text from "~/components/Text/Text";
import DateComponent from "../DateComponent/DateComponent";
import GuestComponent from "../GuestComponent/GuestComponent";
import TableComponent from "../TableComponent/TableComponent";
import TimeComponent from "../TimeComponent/TimeComponent";
import styles from "./BookingPageDisplay.module.scss";

BookingPageDisplay.propTypes = {};

function BookingPageDisplay({
  date,
  setDate,
  booking,
  setBooking,
  time,
  setTime,
  numberOfGuests,
  setNumberOfGuests,
  request,
  setRequest,
  table,
  setTable,
  setPart,
  handleSubmit,
}) {
  return (
    <div className={clsx(styles.wrapper, "container")}>
      <Text title>Book a Table</Text>
      <div className={clsx(styles.form)}>
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

        <Row className={clsx(styles.submit)}>
          <Button
            className={clsx(styles.submitBtn)}
            onClick={() => {
              setPart(2);
            }}
          >
            Next
          </Button>
        </Row>
      </div>
    </div>
  );
}

export default BookingPageDisplay;
