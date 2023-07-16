import { useState } from "react";
import clsx from "clsx";
import { Col, Row } from "react-bootstrap";

import Text from "~/components/Text/Text";
import styles from "./BookingPage.module.scss";
import DateComponent from "./DateComponent/DateComponent";
import TimeComponent from "./TimeComponent/TimeComponent";
import GuestComponent from "./GuestComponent/GuestComponent";
import TableComponent from "./TableComponent/TableComponent";
import CallToActionButton from "~/components/CallToActionButton/CallToActionButton";

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

  const seatingOptions = [1, 2, 3, 4, 8, 12, 20];
  const listTime = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  // console.log("date: ", date);
  // console.log("time: ", time);
  // console.log("numberOfGuests: ", numberOfGuests);
  // const handleSubmit = ()
  return (
    <div className={clsx(styles.wrapper, "container")}>
      <Text title>Book a Table</Text>
      <form className={clsx(styles.form)}>
        <Row className={clsx(styles.dateTime)}>
          <Col className={clsx(styles.date)}>
            <DateComponent date={date} setDate={setDate} />
          </Col>

          <Col className={clsx(styles.time)}>
            <div>
              <TimeComponent listTime={listTime} setTime={setTime} />
            </div>
          </Col>
        </Row>

        <Row className={clsx(styles.guest)}>
          <GuestComponent
            seatingOptions={seatingOptions}
            setNumberOfGuests={setNumberOfGuests}
            numberOfGuests={numberOfGuests}
          />
        </Row>

        <Row className={clsx(styles.table)}>
          <Text cardTitle>Chose a table</Text>
          <TableComponent />
        </Row>

        <Row className={clsx(styles.submit)}>
          <CallToActionButton className={clsx(styles.submitBtn)}>
            Submit
          </CallToActionButton>
        </Row>
      </form>
    </div>
  );
}

export default BookingPage;
