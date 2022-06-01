import React, { useState, useEffect } from 'react';
import { Stack, Typography } from '@mui/material';
import CustomSwitch from './switch.styled';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { citySlice } from '../../store/reducers/citySlice';

function SourceSwitcher() {
  const dispatch = useAppDispatch();
  const [checked, setChecked] = useState(useAppSelector((state) => state.citySlice.isfirstSource));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  useEffect(() => {
    dispatch(citySlice.actions.changeSource());
  }, [checked]);

  return (
    <Stack direction="row" spacing={0.5} alignItems="center" sx={{ p: '0.5rem' }}>
      <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>OpenWeather</Typography>
      <CustomSwitch checked={checked} onChange={handleChange} />
      <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>Storm Glass</Typography>
    </Stack>
  );
}

export default SourceSwitcher;
