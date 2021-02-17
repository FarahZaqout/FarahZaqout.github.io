import { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export interface NavbarLinkProps {
  text: string;
  to: string;
  fontSize?: string;
  className?: string;
  color?: string;
  onClick?: () => void;
  ariaLable: string;
}

const StyledLink: FC<NavbarLinkProps> = ({
  text,
  to,
  className,
  onClick,
  ariaLable,
}) => (
  <Link aria-label={ariaLable} onClick={onClick} to={to} className={className}>
    {text}
  </Link>
);

export const NavbarLink = styled(StyledLink)`
  font-size: ${({ fontSize }) => fontSize || '1.6rem'};
  padding: 0 0 0.3rem 0;
  margin: 0 10px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondaryLight};
  position: relative;
  &:before {
    transition: all 0.3s;
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 0.2rem;
    background: ${({ theme }) => theme.colors.mainLight};
  }
  &:hover {
    color: ${({ theme }) => theme.colors.mainLight};
    &:before {
      transition: all 0.3s;
      width: 100%;
    }
  }

  @media screen and (max-width: 340px) {
    font-size: 3.2rem;
  }
`;
