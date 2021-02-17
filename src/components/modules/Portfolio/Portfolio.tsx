import { FC } from 'react';
import { PortfolioSection } from './Portfolio.styles';
import { SectionTitle, PortfolioItem } from '../../common';
import IncomeSourceDT from '../../../assets/images/landing/income.png';
import IncomeSourcePhone from '../../../assets/images/landing/incomephone.png';
import PressPad from '../../../assets/images/landing/presspad.png';
import PressPadPhone from '../../../assets/images/landing/presspadphone.png';

const MyComponent: FC = () => {
  return (
    <PortfolioSection>
      <SectionTitle>Portfolio</SectionTitle>
      <PortfolioItem
        title="Income Source"
        subtitle="Affiliate Marketing and Income blog post"
        desktopBg={IncomeSourceDT}
        phoneBg={IncomeSourcePhone}
        alignment="left"
        tabIndex={0}
      />
      <PortfolioItem
        title="PressPad"
        subtitle="Journalism networking and mentoring platform"
        desktopBg={PressPad}
        phoneBg={PressPadPhone}
        alignment="right"
        tabIndex={0}
      />
    </PortfolioSection>
  );
};

export default MyComponent;
