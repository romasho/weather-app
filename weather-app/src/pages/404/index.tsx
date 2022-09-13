import React from 'react';

import { Typography } from '@/components/components.styled';

interface Props {
  error?: Error | null;
  goBack?: () => void;
}

function ErrorPage({ error }: Props) {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '4rem' }}
    >
      <Typography>{error ? 'Sorry.. there was an error' : 'Malformed URL'}</Typography>
      <Typography fontSize="1.5rem">
        {error
          ? error && error.toString()
          : 'The link you entered does not look like a valid link.'}
      </Typography>
    </div>
  );
}

export default ErrorPage;
