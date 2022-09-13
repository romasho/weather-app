import React, { useState, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { citySlice } from '@/store/reducers/citySlice';
import { Typography } from '@/components/components.styled';

import { Input, Label, Switch } from './switch.styled';

function SourceSwitcher() {
  const dispatch = useAppDispatch();
  const [checked, setChecked] = useState(useAppSelector((state) => state.citySlice.isFirstSource));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  useEffect(() => {
    dispatch(citySlice.actions.changeSource());
  }, [checked]);

  return (
    <div
      style={{
        position: 'absolute',
        top: '0.5rem',
        right: '0.5rem',
        display: 'flex',
        columnGap: '1rem',
      }}
    >
      <Typography fontSize="14px" color="white" style={{ fontWeight: 'bold' }}>
        OpenWeather
      </Typography>
      <Label>
        <Input checked={checked} type="checkbox" onChange={handleChange} />
        <Switch />
      </Label>
      <Typography color="white" fontSize="14px" style={{ fontWeight: 'bold' }}>
        Storm Glass
      </Typography>
    </div>
  );
}

export default SourceSwitcher;
