import React, { useEffect, useState } from 'react';

import { Typography } from '@/components/components.styled';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { getTodayForExpire } from '@/utils';
import { weatherSlice } from '@/store/reducers/weatherSlice';

import { TypographySpan } from './components.styled';

function Clock() {
  const [date, setDate] = useState(new Date());
  const dispatch = useAppDispatch();
  const { expiresDate } = useAppSelector((state) => state.weatherSlice);

  function tick() {
    setDate(new Date());
    if (expiresDate === String(getTodayForExpire())) {
      dispatch(weatherSlice.actions.clearWeatherDate());
    }
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
      <Typography color="white" fontSize={'4rem'} padding="1.5rem 0">
        {time.slice(0, -2)}
        <TypographySpan color="white" fontSize={'2rem'} inline padding="1.5rem 0 0 0">
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
