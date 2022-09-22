import React from 'react';

import theme from '@/theme';

import { StyledLoader } from './components';

const LOADER_SIZE = 100;

export function Loader() {
  return <StyledLoader color={theme.colors.main} height={LOADER_SIZE} width={LOADER_SIZE} />;
}
