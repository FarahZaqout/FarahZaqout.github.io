import { FC } from 'react';
import { StyledSectionTitle } from './SectionTitle.styles';

export default {
  title: 'Section Title',
};

export const DefaultSectionTitle: FC = () => (
  <StyledSectionTitle color="light">Portfolio</StyledSectionTitle>
);
