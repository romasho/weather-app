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

export const Span = styled.span`
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  line-height: 1;
`;
