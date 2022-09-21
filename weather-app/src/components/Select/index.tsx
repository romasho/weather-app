import AsyncSelect from 'react-select/async';

import { citySlice } from '@/store/reducers/citySlice';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { openWeatherUrlForCord } from '@/utils/api';
import { ICoord } from '@/types';

type Option = {
  value: string;
  label: string;
};

export function Select() {
  const { city } = useAppSelector((state) => state.citySlice);
  const dispatch = useAppDispatch();

  const onSubmit = (option: Option | null) => {
    console.log(option?.value);
    if (option?.value) {
      dispatch(citySlice.actions.changeCity(option.value));
    }
  };

  const colorStyles = {
    control: (styles: any) => ({ ...styles, background: 'none', color: 'white' }),
    container: (styles: any) => ({
      ...styles,
      background: 'none',
      minWidth: '260px',
      width: '35%',
      color: 'black',
      fontSize: '2rem',
    }),
    singleValue: (styles: any) => ({ ...styles, color: 'white' }),
  };

  const promiseOptions = async (inputValue: string) => {
    if (!inputValue) {
      return [];
    } else {
      const res = await fetch(openWeatherUrlForCord(inputValue, 5)).then((res) => res.json());
      return res.map((el: ICoord) => ({
        value: el.name,
        label: el.name,
        latitude: el.lat,
        longitude: el.lon,
      }));
    }
  };

  return (
    <>
      <AsyncSelect
        cacheOptions
        defaultOptions
        onChange={onSubmit}
        value={{ value: city, label: city }}
        loadOptions={promiseOptions}
        styles={colorStyles}
      />
    </>
  );
}
