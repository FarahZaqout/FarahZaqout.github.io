import { FC } from 'react';
import styled from 'styled-components';

interface CommonProps {
  className?: string;
  color?: string;
}

const ReactSectionTitle: FC<CommonProps> = ({ className, children, color }) => {
  return <h2 className={className}>{children}</h2>;
};

export const StyledSectionTitle = styled(ReactSectionTitle)`
  font-size: 4rem;
  margin: 8rem auto 0;
  width: 100%;
  text-align: center;
  color: ${({ theme, color }) =>
    color === 'light' ? theme.colors.mainLight : theme.colors.mainDark};
`;
