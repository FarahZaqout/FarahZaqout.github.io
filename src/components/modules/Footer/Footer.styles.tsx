import { FC, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';
import { StyledIconCreator } from '../../../util';
import { ReactComponent as LinkedIn } from '../../../assets/socialIcons/linkedin.svg';
import { ReactComponent as Github } from '../../../assets/socialIcons/github.svg';
import { ReactComponent as Upwork } from '../../../assets/socialIcons/upwork.svg';
import darkCursor from '../../../assets/images/darkCursor.svg';

interface DefaultProps {
  className?: string;
}

interface FooterSectionProps {
  content: 'follow' | 'contact';
}

interface Anchor {
  href: string;
  target?: string;
}

interface InputInterface {
  type: string;
  id: string;
  name: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

type FooterSectionTypes = FooterSectionProps & DefaultProps;
type AnchorProps = DefaultProps & Anchor;
type InputProps = DefaultProps & InputInterface;

const ReactFooter: FC<DefaultProps> = ({ className, children }) => {
  return <footer className={className}>{children}</footer>;
};

const ReactParagraph: FC<DefaultProps> = ({ className, children }) => {
  return <p className={className}>{children}</p>;
};

const LinkContainer: FC<DefaultProps> = ({ className, children }) => {
  return <ul className={className}>{children}</ul>;
};

const ReactListItem: FC<DefaultProps> = ({ className, children }) => {
  return <li className={className}>{children}</li>;
};

const ReactSection: FC<FooterSectionTypes> = ({ className, children }) => {
  return <section className={className}>{children}</section>;
};

const ReactHeading: FC<DefaultProps> = ({ className, children }) => {
  return <h2 className={className}>{children}</h2>;
};

const ReactAnchor: FC<AnchorProps> = ({ className, children, href }) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

const ReactForm: FC<DefaultProps> = ({ className, children }) => {
  return <form className={className}>{children}</form>;
};

const ReactTextArea: FC<{
  className: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}> = ({ className, children }) => {
  return <textarea className={className}>{children}</textarea>;
};

const ReactInput: FC<InputProps> = ({
  className,
  type,
  onChange,
  id,
  name,
  placeholder,
}) => {
  return (
    <input
      placeholder={placeholder}
      id={id}
      type={type}
      onChange={onChange}
      className={className}
      name={name}
      autoComplete="off"
    />
  );
};

interface ButtonProps {
  onClick: (e: FormEvent<HTMLButtonElement>) => void;
}

const ReactButton: FC<DefaultProps & ButtonProps> = ({
  className,
  children,
  onClick,
}) => {
  return (
    <button className={className} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export const StyledFooter = styled(ReactFooter)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 640px) {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
  }
`;

export const FooterParagraph = styled(ReactParagraph)`
  font-size: 2rem;
  margin: 0;
  max-width: 70%;
  text-align: center;
`;

export const FooterUl = styled(LinkContainer)`
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterLi = styled(ReactListItem)`
  margin: 1rem 0;
`;

export const FooterSection = styled(ReactSection)`
  background: ${({ content }) =>
    content === 'follow' ? '#2C006B' : '#5E21D8'};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  @media screen and (min-width: 640px) {
    width: ${({ content }) => (content === 'follow' ? '35%' : '65%')};
    height: 100vh;
  }
`;

export const FooterSectionTitle = styled(ReactHeading)`
  font-size: 4rem;
  width: auto;
  margin: 14rem auto;
`;

export const StyledAnchor = styled(ReactAnchor)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled(ReactForm)`
  width: 100%;
  max-height: 50vh;
  margin: -4rem 0 0 0;
  @media screen and (min-width: 640px) {
    width: 70%;
    margin: -2rem auto 0;
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-template-rows: 1fr 1fr 2fr 1fr 1fr;
  }
`;

export const Input = styled(ReactInput)`
  background: transparent;
  border: none;
  border-bottom: 0.3rem solid #fff;
  position: relative;
  color: ${({ theme }) => theme.colors.mainLight};
  outline: none;
  letter-spacing: 0.1rem;
  font-family: LeagueSpartan;
  display: block;
  &::-webkit-input-placeholder {
    color: #fff;
    font-family: LeagueSpartan;
    letter-spacing: 0.1rem;
  }
  &:hover {
    border-color: #ffd446;
    transition: all 0.3s;

    &::-webkit-input-placeholder {
      color: #ffd446;
      font-family: LeagueSpartan;
      letter-spacing: 0.1rem;
    }
  }
  &:focus {
    border-color: #ffd446;
    color: #ffd446;
  }
  width: 85%;
  margin: 3rem auto;
  @media screen and (min-width: 640px) {
    margin: ${({ type }) =>
      type === 'email' ? '2rem 0 0 15%' : '2rem 0 0 auto'};
    display: inline-block;
    grid-column: ${({ type }) => (type === 'email' ? 2 / 3 : 1 / 2)};
  }
`;

export const TextArea: FC = styled(ReactTextArea)`
  background: transparent;
  width: 85%;
  font-size: 2rem;
  border: dashed 2px ${({ theme }) => theme.colors.mainLight};
  color: ${({ theme }) => theme.colors.mainLight};
  margin: 1rem auto;
  padding: 0.5rem;
  display: block;
  @media screen and (min-width: 640px) {
    margin: 1rem 0;
    width: 100%;
    grid-column: 1/3;
    grid-row: 3/3;
    box-sizing: border-box;
  }
`;

export const FormParagraph = styled(FooterParagraph)`
  width: 85%;
  max-width: 85%;
  margin: 0 auto;
  text-align: left;
  @media screen and (min-width: 640px) {
    display: block;
    grid-row: 2/3;
    text-align: left;
    padding: 0;
    margin: 2rem 0 0;
  }
`;

export const FormButton = styled(ReactButton)`
  border: none;
  font-size: 1.8rem;
  font-family: LeagueSpartan;
  background: ${({ theme }) => theme.backgrounds.light};
  color: #5e21d8;
  width: 10rem;
  height: 6rem;
  line-height: 6rem;
  transition: all 0.3s;
  &:hover {
    transition: all 0.3s;
    background-color: #ffd446;
    cursor: url(${darkCursor}), auto;
  }
  margin: 2rem auto 0 calc(94% - 10rem);
  @media screen and (min-width: 640px) {
    grid-row: 4/5;
    grid-column: 2/3;
    margin: 2rem 0 0 auto;
  }
`;

export const LinkedInIcon = StyledIconCreator(LinkedIn, { small: true });
export const GithubIcon = StyledIconCreator(Github, { small: true });
export const UpworkIcon = StyledIconCreator(Upwork, { small: true });
