import styled from 'styled-components';

type TypographyPropsType = {
  color?: string;
  fontSize?: string;
  inline?: boolean;
  padding?: string;
};

export const TypographySpan = styled.span<TypographyPropsType>`
  margin: 0;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  font-size: ${(props) => props.fontSize || '1rem'};
  line-height: 1.5;
  letter-spacing: 0.00938em;
  color: ${(props) => props.color};
  ${(props) => (props.inline ? 'display: inline;' : '')};
  padding: ${(props) => props.padding};
`;
