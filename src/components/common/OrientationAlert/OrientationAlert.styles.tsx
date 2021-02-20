import { FC } from 'react';
import styled from 'styled-components';

interface DefaultProps {
  className?: string;
}

const ReactComponent: FC<DefaultProps> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export const StyledComponent = styled(ReactComponent)``;
