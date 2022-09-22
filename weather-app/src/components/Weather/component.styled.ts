import styled from 'styled-components';

import { Section } from '@/pages/Main/Container.styled';

export const SectionWeather = styled(Section)`
  background: rgba(35, 41, 70, 0.6);
  min-height: 30vh;

  @media (max-width: 878px) {
    flex-wrap: wrap;
    flex-direction: column;
    padding: 1rem;
    align-items: center;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const Message = styled.h2`
  padding: 10px 10px;
  font-weight: bold;
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.main};
`;
