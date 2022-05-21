import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <Typography component="h2" color="white" sx={{ fontSize: "4rem" }}>
        {date.toLocaleString("en-US", { hour: "2-digit", minute: "2-digit" })}
      </Typography>
      <Typography component="h2" color="white" sx={{ fontSize: "2rem" }}>
        {date.toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </Typography>
    </div>
  );
}

export default Clock;
