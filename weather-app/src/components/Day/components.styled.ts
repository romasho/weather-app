import styled from 'styled-components';

type WeatherBoxProps = {
  flexDirection?: string;
};

export const WeatherBox = styled.div<WeatherBoxProps>`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => props.flexDirection || 'column'};
  cursor: pointer;
  transition: box-shadow 0.3s;
  float: left;
  border-radius: 1rem;

  &:hover {
    box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 878px) {
    flex-direction: row;
  }
`;

export const DetailedWeatherBox = styled(WeatherBox)`
  cursor: auto;

  @media (max-width: 878px) {
    flex-direction: column;
  }
`;

type FlexBoxCenterProps = {
  columnGap?: string;
};

export const FlexBoxCenter = styled.div<FlexBoxCenterProps>`
  display: flex;
  align-items: center;
  column-gap: ${(props) => props.columnGap};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 1rem;
`;
