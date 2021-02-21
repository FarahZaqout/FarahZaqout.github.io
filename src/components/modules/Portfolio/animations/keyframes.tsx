import { keyframes } from 'styled-components';

export const defaultSlide = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(calc(50vw - 100%), 16rem, 0) scale(0.7);
  }
  100% {
    opacity: 1;
    transform: translate3d(calc(50vw - 50%0), 15.5rem, 0) scale(1);
  }
`;

export const slideInLaptop = keyframes`
0% {
  opacity: 0;
  transform: translate3d(calc(50vw - 100%), 16rem, 0) scale(0.7);
}
100% {
  opacity: 1;
  transform: translate3d(calc(50vw - 60%), 15.5rem, 0) scale(1);
}
`;

export const slideInLaptopOdd = keyframes`
  0% {
  opacity: 0;
  transform: translate3d(calc(50vw), 16rem, 0) scale(0.7);
}
100% {
  opacity: 1;
  transform: translate3d(calc(50vw - 50%), 15.5rem, 0) scale(1);
}
`;

export const MaskAnimation = keyframes`
  0% {
  opacity: 1;
  transform: translate3d(-100%, 0, 0);
}
100% {
  opacity: 1;
  transform: translate3d(100%, 0, 0);
}
`;
