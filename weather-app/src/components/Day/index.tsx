import { useCallback, useState } from 'react';

import { Modal } from '../Modal';

import { ReactComponent as Humidity } from '@/assets/humidity.svg';
import { ReactComponent as Pressure } from '@/assets/pressure.svg';
import { ReactComponent as Wind } from '@/assets/wind.svg';
import theme from '@/theme';
import { Typography } from '@/components/components.styled';

import { Container, DetailedWeatherBox, FlexBoxCenter, WeatherBox } from './components.styled';

interface IDayProps {
  day: number;
  imgCode: string;
  temp: number;
  index: number;
  pressure: number;
  humidity: number;
  night: number;
  morn: number;
  speed: number;
  weather: any;
}

export function Day({
  day,
  imgCode,
  temp,
  index,
  pressure,
  humidity,
  night,
  morn,
  speed,
  weather,
}: IDayProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      {index === 0 ? (
        <WeatherBox onClick={toggleIsOpen} flexDirection="row">
          <img src={`https://openweathermap.org/img/wn/${imgCode}@2x.png`} alt="weather icon" />
          <div>
            <Typography color="white" fontSize={'2rem'}>
              Today
            </Typography>
            <Typography color="white" fontSize={'4rem'}>{`${temp}°`}</Typography>
          </div>
        </WeatherBox>
      ) : (
        <WeatherBox onClick={toggleIsOpen}>
          <Typography color={theme.colors.main} fontSize={'1.5rem'}>
            {new Date(day).toLocaleString('en-US', {
              weekday: 'short',
            })}
          </Typography>
          <img src={`https://openweathermap.org/img/wn/${imgCode}@2x.png`} alt="weather icon" />
          <Typography color={theme.colors.main} fontSize={'1.25rem'}>
            {temp}°
          </Typography>
        </WeatherBox>
      )}
      <Modal isOpen={isOpen} onCancel={toggleIsOpen}>
        <DetailedWeatherBox>
          <FlexBoxCenter>
            <Typography color={theme.colors.main} fontSize={'2.5rem'}>
              {temp}°
            </Typography>
            <img src={`https://openweathermap.org/img/wn/${imgCode}@2x.png`} alt="weather icon" />
            <div>
              <Typography color={theme.colors.main} fontSize={'1.25rem'}>
                {weather.description[0].toUpperCase() + weather.description.slice(1)}
              </Typography>
            </div>
          </FlexBoxCenter>
          <FlexBoxCenter columnGap="1rem">
            <Typography color={theme.colors.main} fontSize={'1.5rem'}>
              <Pressure /> {pressure} hPa
            </Typography>
            <Typography color={theme.colors.main} fontSize={'1.5rem'}>
              <Humidity /> {humidity} %
            </Typography>
            <Typography color={theme.colors.main} fontSize={'1.5rem'}>
              <Wind /> {speed} mph
            </Typography>
          </FlexBoxCenter>
          <Container>
            <Typography color={theme.colors.main} fontSize={'1.5rem'}>
              Morning: {morn}°
            </Typography>
            <Typography color={theme.colors.main} fontSize={'1.5rem'}>
              Night: {night}°
            </Typography>
          </Container>
        </DetailedWeatherBox>
      </Modal>
    </>
  );
}
