import { useState } from "react";

import BookingPageDisplay from "./BookingPageDisplay/BookingPageDisplay";
import BookingPageDisplay2 from "./BookingPageDisplay2/BookingPageDisplay2";

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
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [displayConfirmation, setDisplayConfirmation] = useState(false);
  const [part, setPart] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBooking = {
      date: date,
      time: time,
      numberOfGuests: numberOfGuests,
      request: request,
      table: table,
      name: name,
      phone: phone,
    };

    setBooking(newBooking);
    setIsSubmit(true);
    setDisplayConfirmation(true);
    console.log("click");
  };

  return (
    <>
      {part === 1 ? (
        <BookingPageDisplay
          date={date}
          setDate={setDate}
          booking={booking}
          setBooking={setBooking}
          time={time}
          setTime={setTime}
          numberOfGuests={numberOfGuests}
          setNumberOfGuests={setNumberOfGuests}
          table={table}
          setTable={setTable}
          setPart={setPart}
        />
      ) : (
        <BookingPageDisplay2
          request={request}
          setRequest={setRequest}
          setPart={setPart}
          handleSubmit={handleSubmit}
          displayConfirmation={displayConfirmation}
          setDisplayConfirmation={setDisplayConfirmation}
          isSubmit={isSubmit}
          setIsSubmit={setIsSubmit}
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
        />
      )}
    </>
  );
}

export default BookingPage;
