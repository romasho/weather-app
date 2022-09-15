import React, { useState, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { citySlice } from '@/store/reducers/citySlice';
import { Typography } from '@/components/components.styled';

import { Input, Label, Switch, SwitchContainer } from './switch.styled';

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

export default SourceSwitcher;
