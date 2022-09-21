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
  font-size: 2rem};
  line-height: 1.5;
  letter-spacing: 0.00938em;
  color: white;
  display: inline;
  padding: 1.5rem 1.5rem 0 1rem;
`;
