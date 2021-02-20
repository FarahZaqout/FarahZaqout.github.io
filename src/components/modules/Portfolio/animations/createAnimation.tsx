import { css, FlattenSimpleInterpolation } from 'styled-components';
import { defaultSlide, slideInLaptop, slideInLaptopOdd } from './keyframes';

const getAnimation = (screen: string, index: number) => {
  let animation;
  if (screen === 'laptop') {
    if (index % 2 === 0) animation = slideInLaptop;
    else animation = slideInLaptopOdd;
  } else {
    animation = defaultSlide;
  }
  return animation;
};

type CSSInterpolation = FlattenSimpleInterpolation | string;

// isVisible prop is passed via the styled comoponent.
// Triggers animation when the intersection observer detects a new element
const createAnimation = (
  visible: boolean,
  screen: 'laptop' | 'wide screen' | 'small screen',
  index: number,
): CSSInterpolation => {
  const animation = getAnimation(screen, index);
  const result = visible
    ? css`
        animation: ${animation} 1.5s forwards cubic-bezier(0.2, 0.09, 0.25, 0.9);
      `
    : '';

  return result;
};

export default createAnimation;

// const createMaskAnimation = (isVisible: boolean) => {
//   const result = isVisible
//     ? css`
//         animation: ${slideMask} 1s 0.5s forwards;
//       `
//     : '';

//   return result;
// };
