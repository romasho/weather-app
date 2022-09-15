import { css } from 'styled-components';

// Color palette
const white = '#ffffff';
const main = '#b8c1ec';

const size = {
  xs: 550,
  small: 768,
  med: 992,
  large: 1200,
};

// const above = Object.keys(size).reduce((acc, label) => {
//   acc[label] = (...args) => css`
//     @media (min-width: ${size[label]}px) {
//       ${css(...args)}
//     }
//   `;
//   return acc;
// }, {});

// const below = Object.keys(size).reduce((acc, label) => {
//   acc[label] = (...args) => css`
//     @media (max-width: ${size[label]}px) {
//       ${css(...args)}
//     }
//   `;
//   return acc;
// }, {});

export default {
  spaces: [0, 4, 8, 16, 32, 64, 128],
  fontSizes: [64, 32, 30],
  colors: {
    white,
    main,
  },
};
