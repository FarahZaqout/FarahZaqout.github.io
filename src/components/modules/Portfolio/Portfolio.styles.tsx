import { FC } from 'react';
import styled from 'styled-components';
import darkCursor from '../../../assets/images/darkCursor.svg';

interface CommonProps {
  className?: string;
}

const ReactSection: FC<CommonProps> = ({ className, children }) => {
  return <section className={className}>{children}</section>;
};

export const PortfolioSection = styled(ReactSection)`
  width: 100%;
  padding: 0 0 8rem 0;
  background: ${({ theme }) => theme.backgrounds.light};

  display: flex;
  flex-direction: column;

  cursor: url(${darkCursor}), auto;
`;
