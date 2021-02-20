import { FC } from 'react';
import {
  PortfolioItemWrapper,
  ItemTitle,
  ItemSubtitle,
  InfoContainer,
  CommonProps,
} from './PortfolioItem.styles';

interface ItemProps {
  title: string;
  subtitle: string;
}

type PortfolioItemProps = CommonProps & ItemProps;

const PortfolioItem: FC<PortfolioItemProps> = ({
  background,
  title,
  subtitle,
  phoneBg,
  desktopBg,
  tabIndex,
}) => {
  return (
    <PortfolioItemWrapper
      tabIndex={tabIndex}
      phoneBg={phoneBg}
      desktopBg={desktopBg}
      background={background}
      ariaLabel={title}
    >
      <InfoContainer>
        <ItemTitle>{title}</ItemTitle>
        <ItemSubtitle>{subtitle}</ItemSubtitle>
      </InfoContainer>
    </PortfolioItemWrapper>
  );
};

export default PortfolioItem;
