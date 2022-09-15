import React from 'react';

import theme from '@/theme';

import { Loader } from './components';

const LOADER_SIZE = 100;

export default () => {
  return <Loader color={theme.colors.main} height={LOADER_SIZE} width={LOADER_SIZE} />;
};
