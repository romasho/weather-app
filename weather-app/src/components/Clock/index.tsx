import React, { useEffect, useState } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval( () => tick(), 1000 );
    return function cleanup() {
        clearInterval(timerID);
      };
   });
  
  function tick() {
    setDate(new Date());
   }

  return (
    <>
      <h1>
        {date.toLocaleString("en-US", { hour: "2-digit", minute: "2-digit" })}
      </h1>
      <h1>
        {date.toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </h1>
    </>
  );
}

export default Clock;
