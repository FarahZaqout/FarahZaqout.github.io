import { FC } from 'react';
import { StyledSectionTitle } from './SectionTitle.styles';

const SectionTitle: FC = ({ children }) => {
  return <StyledSectionTitle>{children}</StyledSectionTitle>;
};

export default SectionTitle;
