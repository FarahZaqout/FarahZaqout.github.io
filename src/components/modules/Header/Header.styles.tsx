import { FC } from 'react';
import styled, { keyframes } from 'styled-components';

const slideTitlePhone = keyframes`
  0% {
    margin-left: 4rem;
    opacity: 0;
  }

  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
    margin-left: 8rem;
  }
`;

const slideTitleDesktop = keyframes`
  0% {
    margin-left: 14rem;
    opacity: 0;
  }

  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
    margin-left: 18rem;
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
  display: flex;
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
  animation: ${slideTitlePhone} 0.7s 0.7s forwards ease-out;
  max-width: 70%;
  @media screen and (min-width: 640px) {
    margin-top: 0;
    animation: ${slideTitleDesktop} 0.7s 0.7s forwards ease-out;
  }
`;
