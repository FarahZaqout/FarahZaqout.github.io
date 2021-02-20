import { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { TOTAL_OVERLAY_DURATION } from '../../../util';

const totalAnimationDelay = TOTAL_OVERLAY_DURATION - 0.6;

const animationDelay = `${totalAnimationDelay}s`;

const slideTitlePhone = keyframes`
  0% {
    transform: translateX(-20rem);
    opacity: 0;
  }

  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
    transform: translateX(6rem);
  }
`;

const slideTitleDesktop = keyframes`
  0% {
    transform: translateX(-20rem);
    opacity: 0;
  }

  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
    transform: translateX(18rem);
  }
`;

interface CommonProps {
  className?: string;
  italic?: boolean;
}

const ReactHeading: FC<CommonProps> = ({ className, children }) => {
  return <h1 className={className}>{children}</h1>;
};

export const StyledHeading = styled(ReactHeading)`
  font-size: 5rem;
  opacity: 0;
  width: 60%;
  color: ${({ theme }) => theme.colors.mainLight};
  animation: ${slideTitlePhone} 0.8s ${animationDelay} forwards ease-out;
  text-transform: capitalize;
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
  margin: -18rem 0 0 0;
  @media screen and (min-width: 640px) {
    width: 60%;
    font-size: 7rem;
    animation: ${slideTitleDesktop} 0.8s ${animationDelay} forwards ease-out;
  }
`;
