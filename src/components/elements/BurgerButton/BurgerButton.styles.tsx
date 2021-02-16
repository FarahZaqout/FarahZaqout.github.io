import { FC } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  onClick?: () => void;
  onKeyDown?: () => void;
  className?: string;
  desktopDisplay?: string;
  navMenuButton?: boolean;
}

const ReactButton: FC<ButtonProps> = ({
  children,
  onClick,
  onKeyDown,
  className,
}) => (
  <div
    className={className}
    role="button"
    tabIndex={0}
    aria-label="close navigation menu button"
    onClick={onClick}
    onKeyDown={onKeyDown}
  >
    {children}
  </div>
);

export const BurgerButton = styled(ReactButton)`
  /* basic properties */
  width: 6rem;
  height: 6rem;
  margin: ${({ navMenuButton }) => (navMenuButton ? '6rem 0' : 0)};
  font-size: 4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.mainLight};
  background: transparent;
  cursor: pointer;
  /* display */
  align-items: center;
  justify-content: center;
  /* this component is not intended to be reused anywhere. 
  If this changes, switch to nth child self alignment in the parent component */
  align-self: flex-end;
  text-align: center;
  z-index: 3;
  @media screen and (min-width: 640px) {
    display: ${({ desktopDisplay }) => desktopDisplay || 'flex'};
  }
`;

// #region menu list
