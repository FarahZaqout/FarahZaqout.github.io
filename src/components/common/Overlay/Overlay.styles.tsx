import { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { OVERLAY_TEXT_DURATION } from '../../../util';
import DarkCursor from '../../../assets/images/darkCursor.svg';

const overlayAnimationPeriod = `${OVERLAY_TEXT_DURATION}s`;

const SlideOverlay = keyframes`
  0% {
    left: 0;
  }
  100% {
    left: 101%;
  }
`;

const showText = keyframes`
  0% {
    opacity: 0;
    transform: scale(1.5);
  }
  10% {
    opacity: 0.5;
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
`;

interface DefaultProps {
  className?: string;
}

interface BackgroundProps {
  backgroundColor: string;
  isVisible?: boolean;
}

type ReactDivProps = DefaultProps & BackgroundProps;

const ReactDiv: FC<ReactDivProps> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

const Reactparagraph: FC<DefaultProps> = ({ className, children }) => {
  return <p className={className}>{children}</p>;
};

export const OverlayBackground = styled(ReactDiv)`
  position: absolute;
  left: 0;
  top: -6rem;
  z-index: 10;
  width: 100vw;
  height: calc(100vh + 6rem);
  background: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: url(${DarkCursor}), auto;
  animation: ${SlideOverlay} 1s ${overlayAnimationPeriod} forwards;

  @media screen and (max-width: 640px) {
    display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  }
`;

export const OverlayText = styled(Reactparagraph)`
  font-size: 13rem;
  margin: -6rem 0 0 0;
  animation: ${showText} ${overlayAnimationPeriod} forwards;
  font-family: Helvetica, sans-serif;
  font-weight: 900;
`;
