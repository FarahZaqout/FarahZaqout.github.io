import { FC } from 'react';
import styled from 'styled-components';

export interface DefaultProps {
  className?: string;
  color?: string;
}

const ReactSectionTitle: FC<DefaultProps> = ({ className, children }) => {
  return <h2 className={className}>{children}</h2>;
};

export const StyledSectionTitle = styled(ReactSectionTitle)`
  font-size: 4rem;
  margin: 8rem auto 0;
  width: auto;
  text-align: center;
  color: ${({ theme, color }) =>
    color === 'light' ? theme.colors.mainLight : theme.colors.mainDark};
`;
