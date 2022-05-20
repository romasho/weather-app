import React, { useState, useEffect } from 'react';
import { Stack, Typography } from '@mui/material';
import LangSwitch from './switch.styled';

function SourceSwitcher() {
  const [checked, setChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  // useEffect(() => {
  //   checked ? open : i18n.changeLanguage('en-EN');
  // }, [checked, i18n]);

  return (
    <Stack direction="row" spacing={0.5} alignItems="center" sx={{ p: '0.5rem' }}>
      <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>OpenWeather</Typography>
      <LangSwitch checked={checked} onChange={handleChange} />
      <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>Storm Glass</Typography>
    </Stack>
  );
}

export default SourceSwitcher;
