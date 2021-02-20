import { FC } from 'react';
import { PortfolioSection } from './Portfolio.styles';
import { SectionTitle, PortfolioItem } from '../../common';
import IncomeSourceDT from '../../../assets/images/landing/income.webp';
import IncomeSourcePhone from '../../../assets/images/landing/incomephone.webp';
import PressPad from '../../../assets/images/landing/presspad.webp';
import PressPadPhone from '../../../assets/images/landing/presspadphone.webp';

const MyComponent: FC = () => {
  return (
    <PortfolioSection>
      <SectionTitle>Portfolio</SectionTitle>
      <PortfolioItem
        title="Income Source"
        subtitle="Affiliate Marketing and Income blog post"
        desktopBg={IncomeSourceDT}
        phoneBg={IncomeSourcePhone}
        tabIndex={0}
      />
      <PortfolioItem
        title="PressPad"
        subtitle="Journalism networking and mentoring platform"
        desktopBg={PressPad}
        phoneBg={PressPadPhone}
        tabIndex={0}
      />
    </PortfolioSection>
  );
};

export default MyComponent;
