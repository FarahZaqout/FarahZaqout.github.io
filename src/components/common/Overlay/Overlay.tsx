import { FC } from 'react';
import { OverlayBackground, OverlayText } from './Overlay.styles';

interface OverlayProps {
  text: string;
}

const Overlay: FC<OverlayProps> = ({ text }) => (
  <OverlayBackground backgroundColor="#fcc203">
    <OverlayText>{text}</OverlayText>
  </OverlayBackground>
);

export default Overlay;
