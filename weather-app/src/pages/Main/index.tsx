import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { fetchCity } from '@/store/reducers/citySlice';
import { weatherSlice } from '@/store/reducers/weatherSlice';
import usePosition from '@/hooks/usePosition';
import { geocoding } from '@/utils/api';
import { Clock, Select, Scheduler, SourceSwitcher, Weather } from '@/components';
import useProgressiveImage from '@/hooks/lazyLoad';

import { ColumnBox, BackgroundBox, Section } from './Container.styled';

export function MainPage() {
  const dispatch = useAppDispatch();
  const { city } = useAppSelector((state) => state.citySlice);
  const { latitude, longitude, error } = usePosition();
  const { bgImage } = useAppSelector((state) => state.weatherSlice);
  const loadedImg = useProgressiveImage(bgImage);

  function getPosition() {
    if (latitude && longitude && !error && !city) {
      const src = geocoding(latitude, longitude);
      dispatch(fetchCity(src));
    }
  }

  useEffect(() => {
    getPosition();
    if (latitude && longitude) {
      dispatch(weatherSlice.actions.setPosition({ latitude, longitude }));
    }
  }, [latitude, longitude]);

  return (
    <ColumnBox
      style={{
        backgroundImage: `url(${loadedImg || './baseBackground.png'})`,
      }}
    >
      <BackgroundBox
        style={{
          backgroundImage: `url(${loadedImg || './baseBackground.png'})`,
        }}
      >
        <Section>
          <Clock />
          <Select />
          <SourceSwitcher />
        </Section>
        <Scheduler />
        <Weather />
      </BackgroundBox>
    </ColumnBox>
  );
}
