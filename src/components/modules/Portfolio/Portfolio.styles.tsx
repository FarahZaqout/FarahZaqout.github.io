import { FC, useRef, useEffect, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import darkCursor from '../../../assets/images/darkCursor.svg';
import { portfolioData } from '../../../data';
import { createAnimation, createMaskAnimation } from './animations';

const itemHeight = 60;
const itemMargin = 10;
const titleMargin = 8;
const translateValue = 16;

// 70 here is item height plus margin
const SECTION_HEIGHT = `${
  portfolioData.length * (itemHeight + itemMargin + titleMargin) +
  translateValue
}rem`;

interface DefaultProps {
  className?: string;
}

interface MaskProps {
  visible: boolean[];
  index: number;
}

interface IntersectionProps {
  visible: boolean[];
  setVisible: Dispatch<SetStateAction<boolean[]>>;
  index: number;
}

type ContainerProps = DefaultProps & IntersectionProps;
type ReactMaskProps = DefaultProps & MaskProps;

const ReactSection: FC<DefaultProps> = ({ className, children }) => {
  return <section className={className}>{children}</section>;
};

const ReactMask: FC<ReactMaskProps> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

const ReactChildContainer: FC<ContainerProps> = ({
  className,
  children,
  setVisible,
  visible,
  index,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!visible[index]) {
            const newVisibilityArray = [...visible];
            newVisibilityArray[index] = true;
            setVisible(newVisibilityArray);
          }
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback);
    if (ref.current) {
      const currentElement = ref.current;
      observer.observe(currentElement);
      return () => observer.unobserve(currentElement);
    }
    return () => null;
  });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export const PortfolioSection = styled(ReactSection)`
  width: 100%;
  padding: 0 0 8rem 0;
  background: ${({ theme }) => theme.backgrounds.light};

  display: flex;
  flex-direction: column;

  cursor: url(${darkCursor}), auto;
  @media screen and (min-width: 640px) {
    height: ${SECTION_HEIGHT};
  }
`;

export const PortfolioItemContainer = styled(ReactChildContainer)`
  width: 80%;
  margin: 10rem auto 0;
  height: 45rem;
  @media screen and (min-width: 640px) {
    width: 80%;
    height: 60rem;
    max-width: 92rem;
    margin: 0 0 10rem;
    box-shadow: 0px 11px 36px 12px rgba(0, 0, 0, 0.23);
    opacity: 0;
    position: relative;
    overflow: hidden;
    ${({ visible, index }) =>
      createAnimation(visible[index], 'default', index)};
  }
  @media screen and (min-width: 1300px) {
    ${({ visible, index }) => createAnimation(visible[index], 'laptop', index)};
  }
  @media screen and (min-width: 2000px) {
    ${({ visible, index }) =>
      createAnimation(visible[index], 'wide screen', index)};
  }
`;

export const PortfolioItemMask = styled(ReactMask)`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 4;
  top: 0;
  left: 0;
  opacity: 0;
  background: #fcc203;
  ${({ visible, index }) =>
    visible[index] ? createMaskAnimation(visible[index]) : ''}
`;
