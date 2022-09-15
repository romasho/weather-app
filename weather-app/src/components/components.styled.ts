import styled from 'styled-components';

type ButtonPropsType = {
  contained?: boolean;
};

export const Button = styled.button<ButtonPropsType>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  background-color: transparent;
  outline: 0;
  border: 0;
  margin: 0;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  text-decoration: none;
  color: inherit;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-width: 64px;
  padding: 6px 8px;
  border-radius: 4px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: ${(props) => props.theme.colors.main};
  ${(props) =>
    props.contained
      ? `color: #000000;
  background-color: ${props.theme.colors.main};`
      : ''};

  &:hover {
    -webkit-text-decoration: none;
    text-decoration: none;
    background-color: rgba(184, 193, 236, 0.04);
    ${(props) =>
      props.contained
        ? `box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
        background-color: ${props.theme.colors.main};
        `
        : ''};
  }
`;

type TypographyPropsType = {
  color?: string;
  fontSize?: string;
  inline?: boolean;
};

export const Typography = styled.h2<TypographyPropsType>`
  margin: 0;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  font-size: ${(props) => props.fontSize || '1rem'};
  line-height: 1.5;
  letter-spacing: 0.00938em;
  color: ${(props) => props.color};
  ${(props) => (props.inline ? 'display: inline;' : '')};
  display: flex;
  align-items: center;
`;
