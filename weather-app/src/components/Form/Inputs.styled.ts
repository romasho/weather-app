import styled from 'styled-components';

import { Button } from '@/components/components.styled';

export const ButtonIcon = styled(Button)`
  margin: 1rem auto 0;
`;

export const CustomInput = styled.input`
  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);
  padding: 2px 4px;
  display: flex;
  align-items: center;
  max-width: 600px;
  width: 100%;
  height: 40px;
  border: 2px solid rgba(0, 0, 0, 0);
  margin: 1rem 0;

  &:focus-visible: {
    border: 2px solid ${(props) => props.theme.colors.main};
  }
`;

export const ErrorText = styled.p`
  font-family: 'Roboto', 'F', 'Arial', sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.66;
  letter-spacing: 0.03333em;
  text-align: left;
  margin: -8px 14px 0 14px;
  color: #d32f2f;
`;

export const FormBox = styled.form`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
