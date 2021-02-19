import { FC } from 'react';
import styled, { keyframes } from 'styled-components';

import { ReactComponent as LinkedIn } from '../../../assets/socialIcons/linkedin.svg';
import { ReactComponent as Github } from '../../../assets/socialIcons/github.svg';
import { ReactComponent as Upwork } from '../../../assets/socialIcons/upwork.svg';

import { TOTAL_OVERLAY_DURATION } from '../../../util';

const iconsDelay = `${TOTAL_OVERLAY_DURATION - 0.2}s`;

const slideSocialIcons = keyframes`
  0% {
    right: -20%;
    opacity: 0;
  }
  100% {
    opacity: 1;
    right: 1rem;
  }
`;

interface CommonProps {
  className?: string;
}

const ReactIconsContainer: FC<CommonProps> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export const SocialIconColumn = styled(ReactIconsContainer)`
  height: 100%;
  display: flex;
  width: 10rem;
  flex-direction: column;
  position: absolute;
  right: 0;
  top: 0;
  justify-content: center;
  opacity: 0;
  animation: ${slideSocialIcons} 1s ${iconsDelay} ease-out forwards;
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

export const SocialIconsContainer = styled(ReactIconsContainer)`
  display: flex;
  flex-direction: column;
  width: 8rem;
  margin: -17rem 0 0 0;
`;

const iconCreator = (icon: FC): FC => styled(icon)`
  width: 6rem;
  height: 6rem;
  margin: 1rem 4rem 1rem 0;
  fill: #cecece;
  transition: all 0.3s;
  &:hover {
    fill: #fff;
    transform: scale(1.2);
    transition: all 0.3s;
  }
`;

export const LinkedInIcon = iconCreator(LinkedIn);
export const GithubIcon = iconCreator(Github);
export const UpworkIcon = iconCreator(Upwork);
