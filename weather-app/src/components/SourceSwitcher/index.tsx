import React, { useState, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { citySlice } from '@/store/reducers/citySlice';
import { Typography } from '@/components/components.styled';

import { Input, Label, Switch, SwitchContainer } from './switch.styled';

export function SourceSwitcher() {
  const dispatch = useAppDispatch();
  const [checked, setChecked] = useState(useAppSelector((state) => state.citySlice.isFirstSource));

  const handleChange = () => {
    setChecked(!checked);
    dispatch(citySlice.actions.changeSource());
  };

  return (
    <SwitchContainer>
      <Typography fontSize="14px" color="white" bold>
        OpenWeather
      </Typography>
      <Label>
        <Input checked={checked} type="checkbox" onChange={handleChange} />
        <Switch />
      </Label>
      <Typography color="white" fontSize="14px" bold>
        Storm Glass
      </Typography>
    </SwitchContainer>
  );
}
