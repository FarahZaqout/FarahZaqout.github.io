import { FC } from 'react';
import styled from 'styled-components';

interface IconOptions {
  small: boolean;
}

const iconCreator = (icon: FC, options?: IconOptions): FC => {
  let width = '6rem';
  let height = '6rem';
  let margin = '1rem 4rem 1rem 0';
  if (options) {
    width = '3.5rem';
    height = '3.5rem';
    margin = '12rem 1rem';
  }
  return styled(icon)`
    width: ${width};
    height: ${height};
    margin: ${margin};
    fill: #cecece;
    transition: all 0.3s;
    &:hover {
      fill: #fff;
      transform: scale(1.2);
      transition: all 0.3s;
    }
  `;
};

export default iconCreator;
