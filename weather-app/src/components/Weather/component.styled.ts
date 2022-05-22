import { styled, Typography } from '@mui/material';

const Message = styled(Typography)(({ theme }) => ({
  p: '10px 10px',
  fontWeight: 'bold',
  fontSize: '2.5rem',
  color: `${theme.palette.text.primary}`,
}));

export default Message;
