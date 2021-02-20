import { css, FlattenSimpleInterpolation } from 'styled-components';
import {
  defaultSlide,
  slideInLaptop,
  slideInLaptopOdd,
  MaskAnimation,
} from './keyframes';

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
type Screens = 'laptop' | 'wide screen' | 'default';
// isVisible prop is passed via the styled comoponent.
// Triggers animation when the intersection observer detects a new element
const createAnimation = (
  visible: boolean,
  screen: Screens,
  index: number,
): CSSInterpolation => {
  const animation = getAnimation(screen, index);
  const result = visible
    ? css`
        animation: ${animation} 1.5s 0.3s forwards
          cubic-bezier(0.2, 0.09, 0.25, 0.9);
      `
    : '';

  return result;
};

const createMaskAnimation = (
  isVisible: boolean,
): FlattenSimpleInterpolation | string => {
  const result = isVisible
    ? css`
        animation: ${MaskAnimation} 1s 0.3s forwards;
      `
    : '';

  return result;
};

export { createAnimation, createMaskAnimation };
