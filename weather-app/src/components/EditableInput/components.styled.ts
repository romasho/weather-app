import styled from 'styled-components';

export const Input = styled.input`
  font: inherit;
  letter-spacing: inherit;
  border: 0;
  background: none;
  height: 1.4375em;
  margin: 0;
  display: block;
  min-width: 0;
  width: 100%;
  padding: 10px;
  font-size: 2.5rem;
  font-weight: bold;
  direction: rtl;
  color: white;
  margin: 10px;

  & :focus {
    outline: 0;
  }
`;
