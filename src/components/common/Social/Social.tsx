import { FC } from 'react';
import {
  LinkedInIcon,
  GithubIcon,
  UpworkIcon,
  SocialIconsContainer,
  SocialIconColumn,
} from './Social.styled';

const Social: FC = () => {
  return (
    <SocialIconColumn>
      <SocialIconsContainer>
        <LinkedInIcon />
        <GithubIcon />
        <UpworkIcon />
      </SocialIconsContainer>
    </SocialIconColumn>
  );
};

export default Social;
