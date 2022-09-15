import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { fetchCity } from '@/store/reducers/citySlice';
import { weatherSlice } from '@/store/reducers/weatherSlice';
import usePosition from '@/hooks/usePosition';
import { Geocoding } from '@/utils';
import { Clock, EditableInput, Planer, SourceSwitcher, Weather } from '@/components';
import useProgressiveImage from '@/hooks/lazyLoad';

import { ColumnBox, BackgroundBox, Section } from './Container.styled';

function Main() {
  const dispatch = useAppDispatch();
  const { city } = useAppSelector((state) => state.citySlice);
  const { latitude, longitude, error } = usePosition();
  const { bgImage } = useAppSelector((state) => state.weatherSlice);
  const loaded = useProgressiveImage(bgImage);

  async function getPosition() {
    if (latitude && longitude && !error && !city) {
      const src = Geocoding(latitude, longitude);
      dispatch(fetchCity(src));
    }
  }

  useEffect(() => {
    getPosition();
    if (latitude && longitude) {
      dispatch(weatherSlice.actions.setPosition({ lat: latitude + '', lon: longitude + '' }));
    }
  }, [latitude, longitude]);

  return (
    <ColumnBox
      style={{
        backgroundImage: `url(${loaded || './шфидщ.png'})`,
      }}
    >
      <BackgroundBox
        style={{
          backgroundImage: `url(${loaded || './шфидщ.png'})`,
        }}
      >
        <Section>
          <Clock />
          <EditableInput />
          <SourceSwitcher />
        </Section>
        <Planer />
        <Weather />
      </BackgroundBox>
    </ColumnBox>
  );
}

export default Main;
