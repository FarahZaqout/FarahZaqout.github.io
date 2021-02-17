import { FC } from 'react';
import styled from 'styled-components';

interface CommonProps {
  openStatus?: string;
  className?: string;
}

const ReactContainer: FC<CommonProps> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export const MenuContainer = styled(ReactContainer)`
  width: 100vw;
  height: calc(100vh + 6rem);
  background: ${({ theme }) => theme.backgrounds.secondary};
  display: flex;
  left: ${({ openStatus }) => (openStatus === 'open' ? '0' : '-100%;')};
  top: -6rem;
  flex-direction: column;
  position: absolute;
  transition: all 0.7s;
  z-index: 3;
  @media screen and (min-width: 640px) {
    display: none;
  }
`;

// #region menu list
const UnstyledList: FC<CommonProps> = ({ children, className }) => {
  return <ul className={className}>{children}</ul>;
};

export const UnorderedList = styled(UnstyledList)`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  left: auto;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

const UnstyledListItem: FC<CommonProps> = ({ children, className }) => {
  return <li className={className}>{children}</li>;
};

export const ListItem = styled(UnstyledListItem)`
  margin: 2rem 0 0 6rem;
  font-size: 4rem;
`;
// #endregion menu list
