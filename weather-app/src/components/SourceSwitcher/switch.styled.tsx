import styled from 'styled-components';

import theme from '../../theme';

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const Switch = styled.div`
  position: relative;
  width: 3rem;
  height: 1.5rem;
  background: #b3b3b3;
  border-radius: 32px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: '';
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 35px;
    top: 50%;
    background: white;
    transform: translate(0, -50%);
  }
`;

export const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Switch} {
    background: ${theme.colors.main};

    &:before {
      transform: translate(1.5rem, -50%);
    }
  }
`;

export const SettingsBox = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  column-gap: 1rem;
`;

export const SwitchContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  column-gap: 1rem;
`;
