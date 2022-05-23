import { styled } from '@mui/material';

export const CustomInput = styled('input')(() => ({
  backgroundColor: 'rgba(0, 0, 0, 0.0)',
  color: 'rgba(0, 0, 0, 0.87)',
  transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  borderRadius: '4px',
  boxShadow:
    ' 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
  padding: '2px 4px',
  display: 'flex',
  alignItems: 'center',
  maxWidth: '600px',
  minWidth: '400px',
  height: '40px',
  border: '1px solid #b8c1ec',
  marginTop: '1rem',
  '&:focus-visible': {
    border: '2px solid #b8c1ec',
  },
}));

export const ErrorText = styled('p')(() => ({
  fontFamily: '"Roboto","F","Arial",sans-serif',
  fontWeight: 400,
  fontSize: '0.75rem',
  lineHeight: 1.66,
  letterSpacing: '0.03333em',
  textAlign: 'left',
  marginTop: '4px',
  marginRight: '14px',
  marginBottom: 0,
  marginLeft: '14px',
  color: '#d32f2f',
}));
