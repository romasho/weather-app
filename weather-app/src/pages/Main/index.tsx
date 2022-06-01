import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { ColumnBox, BackgroundBox, Section } from './Container.styled';
import { fetchCity } from '../../store/reducers/citySlice';
import usePosition from '../../hooks/usePosition';
import { Geocoding } from '../../utils';
import { Clock, EditableInput, SourceSettings, Planer, Weather } from '../../components';
import useProgressiveImage from '../../hooks/lazyLoad';

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
        <Section
          sx={{
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' },
          }}
        >
          <Clock />
          <EditableInput />
          <SourceSettings />
        </Section>
        <Planer />
        <Weather />
      </BackgroundBox>
    </ColumnBox>
  );
}

export default Main;
