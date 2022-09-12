import styled from 'styled-components';

export const WeatherBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 878px) {
    flex-direction: row;
  }
`;
