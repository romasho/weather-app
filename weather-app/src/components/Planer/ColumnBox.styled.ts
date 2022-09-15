import styled from 'styled-components';

import { Typography } from '@/components/components.styled';

export const CustomBox = styled.section`
  height: 100%;
  padding: 0 1rem;
  overflow-y: auto;
  min-height: 30vh;
  max-height: 30vh;

  &::-webkit-scrollbar {
    width: 0.6rem;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px ${(props) => props.theme.colors.main};
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
    border-radius: 2rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.main};
    border-radius: 2rem;
  }
`;

export const Title = styled(Typography)`
  padding: 10px 10px;
`;
