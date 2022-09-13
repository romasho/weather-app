import theme from '@/theme';
import { Typography } from '@/components/components.styled';

import { WeatherBox } from './components.styled';

interface IDayProps {
  day: number;
  imgCode: string;
  temp: number;
  index: number;
}

function Day({ day, imgCode, temp, index }: IDayProps) {
  return (
    <>
      {index === 0 ? (
        <WeatherBox
          style={{
            flexDirection: 'row',
          }}
        >
          <img
            src={`https://openweathermap.org/img/wn/${imgCode}@2x.png`}
            alt="weather icon"
            style={{ height: '100%' }}
          />
          <div>
            <Typography color="white" fontSize={'2rem'}>
              Today
            </Typography>
            <Typography color="white" fontSize={'4rem'}>{`${Math.floor(temp)}°`}</Typography>
          </div>
        </WeatherBox>
      ) : (
        <WeatherBox>
          <Typography color={theme.palette.text.primary} fontSize={'1.5rem'}>
            {new Date(day).toLocaleString('en-US', {
              weekday: 'short',
            })}
          </Typography>
          <img src={`https://openweathermap.org/img/wn/${imgCode}@2x.png`} alt="weather icon" />
          <Typography color={theme.palette.text.primary} fontSize={'1.25rem'}>{`${Math.floor(
            temp
          )}°`}</Typography>
        </WeatherBox>
      )}
    </>
  );
}

export default Day;
