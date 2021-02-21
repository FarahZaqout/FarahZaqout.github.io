import { FC, useRef, useEffect, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import darkCursor from '../../../assets/images/darkCursor.svg';
// import { portfolioData } from '../../../data';
import { createAnimation, createMaskAnimation } from './animations';

// const ITEM_HEIGHT_DESKTOP = 60;
// const ITEM_MARGIN_DESKTOP = 10;
// const TITLE_MARGIN_DESKTOP = 8;
// const TRANSLATE_VALUE = 16;

// // 70 here is item height plus margin
// const SECTION_HEIGHT_DESKTOP = `${
//   portfolioData.length *
//     (ITEM_HEIGHT_DESKTOP + TITLE_MARGIN_DESKTOP + ITEM_MARGIN_DESKTOP) +
//   TRANSLATE_VALUE
// }rem`;

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

// TODO: extract the hook for better readability
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
        if (entry.isIntersecting && !visible[index]) {
          const newVisibilityArray = [...visible];
          newVisibilityArray[index] = true;
          setVisible(newVisibilityArray);
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-300px',
    });
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
  padding: 0 0 10rem 0;
  background: ${({ theme }) => theme.backgrounds.light};

  display: flex;
  flex-direction: column;

  cursor: url(${darkCursor}), auto;
`;

export const PortfolioItemContainer = styled(ReactChildContainer)`
  width: 80%;
  margin: 10rem auto 0;
  height: 45rem;
  box-shadow: 0px 11px 36px 12px rgba(0, 0, 0, 0.23);
  position: relative;
  @media screen and (min-width: 640px) {
    width: 80%;
    height: 60rem;
    max-width: 92rem;
    margin: 0 auto 10rem;
    opacity: 0;
    overflow-x: hidden;
    ${({ visible, index }) =>
      createAnimation(visible[index], 'default', index)};
  }
  @media screen and (min-width: 1300px) {
    margin: 0 0 10rem;
    ${({ visible, index }) => createAnimation(visible[index], 'laptop', index)};
  }
  @media screen and (min-width: 2000px) {
    ${({ visible, index }) =>
      createAnimation(visible[index], 'wide screen', index)};
  }
`;

export const PortfolioItemMask = styled(ReactMask)`
  display: none;
  @media screen and (min-width: 640px) {
    display: flex;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 4;
    top: 0;
    left: 0;
    background: #fcc203;
    ${({ visible, index }) =>
      visible[index] ? createMaskAnimation(visible[index]) : ''}
  }
`;
