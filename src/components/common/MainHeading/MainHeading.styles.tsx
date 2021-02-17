import { FC } from 'react';
import styled, { keyframes } from 'styled-components';

const slideTitlePhone = keyframes`
  0% {
    margin-left: -40rem;
    opacity: 0;
  }

  50% {
    opacity: 0.9;
  }
  100% {
    opacity: 1;
    margin-left: 8rem;
  }
`;

const slideTitleDesktop = keyframes`
  0% {
    margin-left: -20rem;
    opacity: 0;
  }

  50% {
    opacity: 0.9;
  }
  100% {
    opacity: 1;
    margin-left: 18rem;
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
  width: 60%;
  color: ${({ theme }) => theme.colors.mainLight};
  animation: ${slideTitlePhone} 0.7s forwards ease-out;
  text-transform: capitalize;
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
  margin: -18rem 0 0 0;
  @media screen and (min-width: 640px) {
    width: 60%;
    font-size: 7rem;
    animation: ${slideTitleDesktop} 0.7s forwards ease-out;
  }
`;
