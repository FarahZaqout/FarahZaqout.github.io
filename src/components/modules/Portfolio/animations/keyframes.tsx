import { keyframes } from 'styled-components';

export const defaultSlide = keyframes`
  0% {
    opacity: 0;
    transform: translateX(calc(50vw - 100%)) translateY(16rem) scale(0.7);
  }
  100% {
    opacity: 1;
    transform: translateX(calc(50vw - 50%)) translateY(15.5rem) scale(1);
  }
`;

export const slideInLaptop = keyframes`
0% {
  opacity: 0;
  transform: translateX(calc(50vw - 80%)) translateY(16rem) scale(0.7);
}
100% {
  opacity: 1;
  transform: translateX(calc(50vw - 60%)) translateY(15.5rem) scale(1);
}
`;

export const slideInLaptopOdd = keyframes`
  0% {
  opacity: 0;
  transform: translateX(calc(50vw)) translateY(16rem) scale(0.7);
}
100% {
  opacity: 1;
  transform: translateX(calc(50vw - 50%)) translateY(15.5rem) scale(1);
}
`;

export const MaskAnimation = keyframes`
  0% {
  opacity: 1;
  transform: translateX(-100%);
}
100% {
  opacity: 1;
  transform: translateX(100%);
}
`;
