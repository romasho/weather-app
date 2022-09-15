import React from 'react';

import { Typography } from '@/components/components.styled';

import { Box } from './Container.styled';

interface Props {
  error?: Error | null;
  goBack?: () => void;
}

function ErrorPage({ error }: Props) {
  return (
    <Box>
      <Typography>{error ? 'Sorry.. there was an error' : 'Malformed URL'}</Typography>
      <Typography fontSize="1.5rem">
        {error
          ? error && error.toString()
          : 'The link you entered does not look like a valid link.'}
      </Typography>
    </Box>
  );
}

export default ErrorPage;
