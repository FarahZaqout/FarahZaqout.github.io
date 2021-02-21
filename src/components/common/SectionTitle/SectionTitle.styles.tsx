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
  width: auto;
  text-align: center;
  margin: 8rem auto 0;
  color: ${({ theme, color }) =>
    color === 'light' ? theme.colors.mainLight : theme.colors.mainDark};
  @media screen and (min-width: 640px) {
    margin: 8rem auto 10rem;
  }
`;
