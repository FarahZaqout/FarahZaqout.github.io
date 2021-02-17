import { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { OVERLAY_TEXT_DURATION } from '../../../util';

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

interface CommonProps {
  className?: string;
}

interface BackgroundProps {
  backgroundColor: string;
}

type ReactDivProps = CommonProps & BackgroundProps;

const ReactDiv: FC<ReactDivProps> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

const Reactparagraph: FC<CommonProps> = ({ className, children }) => {
  return <p className={className}>{children}</p>;
};

export const OverlayBackground = styled(ReactDiv)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${SlideOverlay} 1s ${OVERLAY_TEXT_DURATION} forwards;
`;

export const OverlayText = styled(Reactparagraph)`
  font-size: 13rem;
  animation: ${showText} ${OVERLAY_TEXT_DURATION} forwards;
`;
