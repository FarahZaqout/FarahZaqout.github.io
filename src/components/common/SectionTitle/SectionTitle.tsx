import { FC } from 'react';
import { StyledSectionTitle, DefaultProps } from './SectionTitle.styles';

const SectionTitle: FC<DefaultProps> = ({ children, color }) => {
  return <StyledSectionTitle color={color}>{children}</StyledSectionTitle>;
};

export default SectionTitle;
