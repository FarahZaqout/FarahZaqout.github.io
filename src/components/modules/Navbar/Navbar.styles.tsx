import { FC } from 'react';
import styled from 'styled-components';

interface CommonProps {
  className?: string;
}

const ReactNavbar: FC<CommonProps> = ({ className, children }) => {
  return <nav className={className}>{children}</nav>;
};

const ReactContainer: FC<CommonProps> = ({ className, children }) => {
  return <ul className={className}>{children}</ul>;
};

export const StyledNavbar = styled(ReactNavbar)`
  display: flex;
  justify-content: flex-end;
  @media screen and (min-width: 640px) {
    /* basic styles */
    max-width: 1440px;
    margin: 0 auto;
    height: 6rem;
    /* display */
    display: flex;
  }
`;

export const NavbarLinkContainer = styled(ReactContainer)`
  display: none;
  @media screen and (min-width: 640px) {
    margin: 0 8rem 0 auto;
    list-style: none;
    display: flex;
    align-items: flex-end;
    justify-self: flex-end;
  }
`;
