/* eslint-disable no-nested-ternary */
import { FC } from 'react';
import styled from 'styled-components';

export interface CommonProps {
  className?: string;
  background?: 'dark' | 'light';
  desktopBg?: string;
  phoneBg?: string;
  alignment?: 'left' | 'right';
  tabIndex?: number;
  ariaLabel?: string;
}

const ReactPortfolioItemContainer: FC<CommonProps> = ({
  className,
  children,
  tabIndex,
  ariaLabel,
}) => {
  return (
    <div aria-label={ariaLabel} tabIndex={tabIndex} className={className}>
      {children}
    </div>
  );
};

export const PortfolioItemContainer = styled(ReactPortfolioItemContainer)`
  width: 80%;
  height: 48rem;
  max-width: 92rem;
  margin: 13.5rem auto 0;
`;

export const PortfolioItemWrapper = styled(ReactPortfolioItemContainer)`
  width: 100%;
  height: 100%;

  position: relative;
  overflow-x: hidden;
  cursor: pointer;

  color: ${({ theme, background }) =>
    background === 'dark' ? theme.colors.mainLight : theme.colors.mainDark};
  background: ${({ theme, background }) =>
    background === 'dark' ? theme.backgrounds.dark : theme.backgrounds.light};
  box-shadow: 0px 11px 36px 12px rgba(0, 0, 0, 0.23);

  background-image: url(${({ phoneBg }) => phoneBg});
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;

  &:before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: -100%;
    background: linear-gradient(90deg, #1b1f30 0%, #294d86 25%);
    opacity: 0.9;
    transition: all 0.4s;
  }
  &:after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: ${({ theme }) => theme.backgrounds.dark};
    opacity: 0.8;
    transition: all 0.4s;
  }
  &:hover {
    transition: all 0.4s;
    &:after {
      opacity: 0.6;
    }
    &:before {
      transition: all 0.4s;
      left: 0;
    }
  }

  @media screen and (min-width: 640px) {
    background-image: url(${({ desktopBg }) => desktopBg});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin: ${({ alignment }) =>
      alignment === 'left'
        ? '0 0 0 -3rem' // if left
        : alignment === 'right'
        ? '0 0 0 3rem' // else if right
        : ''}; // else
  }
`;

const ReactItemTitle: FC<CommonProps> = ({ className, children }) => {
  return <h3 className={className}>{children}</h3>;
};

export const ItemTitle = styled(ReactItemTitle)`
  z-index: 3;
  background: transparent;
  font-size: 3rem;
  @media screen and (min-width: 640px) {
    font-size: 4rem;
  }
`;

const ReactParagraph: FC<CommonProps> = ({ className, children }) => {
  return <p className={className}>{children}</p>;
};

export const ItemSubtitle = styled(ReactParagraph)`
  font-size: 2rem;
  font-style: italic;
  font-family: 'Times New Roman', Times, serif;
  background: transparent;
  z-index: 3;
  @media screen and (min-width: 640px) {
    font-size: 2.5rem;
  }
`;

export const InfoContainer = styled(ReactPortfolioItemContainer)`
  margin: -6rem 4rem 0;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.mainLight};
  @media screen and (min-width: 640px) {
    margin: -6rem 14rem 0;
  }
`;
