import { FC } from 'react';
import { StyledHeading } from './MainHeading.styles';

interface MainHeadingProps {
  text: string;
  italic?: boolean;
}

const MainHeading: FC<MainHeadingProps> = ({ text, italic }) => {
  const lowercaseText = text.toLowerCase();
  return <StyledHeading italic={italic}>{lowercaseText}</StyledHeading>;
};

export default MainHeading;
