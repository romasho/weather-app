import React, { useEffect, useState } from 'react';

import { Typography } from '@/components/components.styled';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { getTomorrow } from '@/utils';
import { weatherSlice } from '@/store/reducers/weatherSlice';

import { TypographySpan } from './components.styled';

export function Clock() {
  const [date, setDate] = useState(new Date());
  const dispatch = useAppDispatch();
  const { expiresDate } = useAppSelector((state) => state.weatherSlice);

  function tick() {
    setDate(new Date());
    if (expiresDate !== getTomorrow()) {
      dispatch(weatherSlice.actions.clearWeatherDate());
    }
  }

  useEffect(() => {
    const timerID = setInterval(tick, 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  const time = date.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
  const formattedTime = time.slice(0, -2);
  const timeOfDay = time.slice(-2);
  const day = date.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div>
      <Typography color="white" fontSize={'4rem'}>
        {formattedTime}
        <TypographySpan>{timeOfDay}</TypographySpan>
      </Typography>

      <Typography color="white" fontSize={'2rem'}>
        {day}
      </Typography>
    </div>
  );
}
