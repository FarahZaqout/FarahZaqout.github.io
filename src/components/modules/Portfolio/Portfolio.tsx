import { FC, useState } from 'react';
import {
  PortfolioSection,
  PortfolioItemContainer,
  PortfolioItemMask,
} from './Portfolio.styles';
import { SectionTitle, PortfolioItem } from '../../common';
import IncomeSourceDT from '../../../assets/images/landing/income.webp';
import IncomeSourcePhone from '../../../assets/images/landing/incomephone.webp';
import PressPad from '../../../assets/images/landing/presspad.webp';
import PressPadPhone from '../../../assets/images/landing/presspadphone.webp';

const MyComponent: FC = () => {
  const [visible, setVisible] = useState<boolean[]>([]);
  return (
    <PortfolioSection>
      <SectionTitle>Portfolio</SectionTitle>
      <PortfolioItemContainer
        index={0}
        setVisible={setVisible}
        visible={visible}
      >
        <PortfolioItemMask index={0} visible={visible} />
        <PortfolioItem
          title="Income Source"
          subtitle="Affiliate Marketing and Income blog"
          desktopBg={IncomeSourceDT}
          phoneBg={IncomeSourcePhone}
          tabIndex={0}
        />
      </PortfolioItemContainer>
      <PortfolioItemContainer
        index={1}
        setVisible={setVisible}
        visible={visible}
      >
        <PortfolioItemMask index={1} visible={visible} />
        <PortfolioItem
          title="PressPad"
          subtitle="Journalism networking and mentoring platform"
          desktopBg={PressPad}
          phoneBg={PressPadPhone}
          tabIndex={0}
        />
      </PortfolioItemContainer>
    </PortfolioSection>
  );
};

export default MyComponent;
