import { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { TOTAL_OVERLAY_DURATION, HEADER_TEXT_DURATION } from '../../../util';

const totalDuration = TOTAL_OVERLAY_DURATION + HEADER_TEXT_DURATION - 0.5;
const totalAnimationDelay = `${totalDuration}s`;

const slideTitlePhone = keyframes`
  0% {
    transform: translateX(4rem);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateX(6rem);
  }
`;

const slideTitleDesktop = keyframes`
  0% {
    transform: translateX(16rem);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateX(18rem);
  }
`;

interface CommonProps {
  className?: string;
}

const ReactContainer: FC<CommonProps> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export const HeaderContainer = styled(ReactContainer)`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
`;

const ReactParagraph: FC<CommonProps> = ({ className, children }) => {
  return <p className={className}>{children}</p>;
};

export const HeaderParagraph = styled(ReactParagraph)`
  font-size: 2.4rem;
  margin-top: 1rem;
  font-style: italic;
  font-family: 'Times New Roman', Times, serif;
  opacity: 0;
  animation: ${slideTitlePhone} 1s ${totalAnimationDelay} forwards ease-out;
  max-width: 70%;
  @media screen and (min-width: 640px) {
    margin-top: 0;
    animation: ${slideTitleDesktop} 1s ${totalAnimationDelay} forwards ease-out;
  }
`;
