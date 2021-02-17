import { FC } from 'react';
import {
  PortfolioItemContainer,
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
  alignment,
  tabIndex,
}) => {
  return (
    <PortfolioItemContainer>
      <PortfolioItemWrapper
        tabIndex={tabIndex}
        phoneBg={phoneBg}
        desktopBg={desktopBg}
        background={background}
        alignment={alignment}
        ariaLabel={title}
      >
        <InfoContainer>
          <ItemTitle>{title}</ItemTitle>
          <ItemSubtitle>{subtitle}</ItemSubtitle>
        </InfoContainer>
      </PortfolioItemWrapper>
    </PortfolioItemContainer>
  );
};

export default PortfolioItem;
