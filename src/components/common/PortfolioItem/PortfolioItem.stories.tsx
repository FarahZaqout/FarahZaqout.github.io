import { FC } from 'react';
import PortfolioItem from './PortfolioItem';
import IncomeSource from '../../../assets/images/landing/income.png';
import IncomeSourcePhone from '../../../assets/images/landing/incomephone.png';

export default {
  title: 'Portfolio Item',
};

export const DefaultPortfolioItem: FC = () => (
  <PortfolioItem
    tabIndex={0}
    phoneBg={IncomeSourcePhone}
    desktopBg={IncomeSource}
    title="Income Source"
    subtitle="Affiliate marketing and income blog post"
  />
);
