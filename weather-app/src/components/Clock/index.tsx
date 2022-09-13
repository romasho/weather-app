import React, { useEffect, useState } from 'react';

import { Typography } from '@/components/components.styled';

import { TypographySpan } from './components.styled';

function Clock() {
  const [date, setDate] = useState(new Date());

  function tick() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  const time = date.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div>
      <Typography color="white" fontSize={'4rem'}>
        {time.slice(0, -2)}
        <TypographySpan color="white" fontSize={'2rem'} inline>
          {time.slice(-2)}
        </TypographySpan>
      </Typography>

      <Typography color="white" fontSize={'2rem'}>
        {date.toLocaleString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </Typography>
    </div>
  );
}

export default Clock;
