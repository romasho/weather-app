import { Container, Typography } from '@mui/material';
import React from 'react';

interface Props {
  error?: Error | null;
  goBack?: () => void;
}

function ErrorPage({ error }: Props) {
  return (
    <Container sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', pt: '4rem' }}>
      <Typography>{error ? 'Sorry.. there was an error' : 'Malformed URL'}</Typography>
      <Typography sx={{ fontSize: '1.5rem', textAlign: 'center' }} component="h4">
        {error
          ? error && error.toString()
          : 'The link you entered does not look like a valid link.'}
      </Typography>
    </Container>
  );
}

export default ErrorPage;
