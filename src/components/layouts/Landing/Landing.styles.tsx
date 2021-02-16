import { FC } from 'react';
import styled from 'styled-components';

interface CommponProps {
  className?: string;
}

const ReactSection: FC<CommponProps> = ({ className, children }) => {
  return <section className={className}>{children}</section>;
};

export const LandingSection = styled(ReactSection)`
  width: 100%;
  height: 100%;
`;
