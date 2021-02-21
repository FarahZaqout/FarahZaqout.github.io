import { ChangeEvent, FC } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  StyledFooter,
  FooterUl,
  FooterLi,
  FooterParagraph,
  FooterSection,
  FooterSectionTitle,
  GithubIcon,
  LinkedInIcon,
  UpworkIcon,
  StyledAnchor,
  Form,
  Input,
  TextArea,
  FormParagraph,
  FormButton,
} from './Footer.styles';

const Footer: FC = () => {
  const handleButtonClick = () => {
    console.log('button clicked');
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
  };

  return (
    <StyledFooter>
      <FooterSection content="follow">
        <FooterSectionTitle>Follow</FooterSectionTitle>
        <FooterParagraph>
          Connect with me on one of the networks below
        </FooterParagraph>
        <FooterUl>
          <FooterLi>
            <StyledAnchor href="#" target="_blank">
              <GithubIcon />
            </StyledAnchor>
          </FooterLi>
          <FooterLi>
            <StyledAnchor href="#" target="_blank">
              <LinkedInIcon />
            </StyledAnchor>
          </FooterLi>
          <FooterLi>
            <StyledAnchor
              href="https://www.upwork.com/freelancers/~01b848edcc0b44b61b"
              target="_blank"
            >
              <UpworkIcon />
            </StyledAnchor>
          </FooterLi>
        </FooterUl>
      </FooterSection>
      <FooterSection content="contact">
        <FooterSectionTitle>Contact</FooterSectionTitle>
        <Form>
          <label htmlFor="name">
            <Input
              placeholder="Name"
              name="name"
              id="name"
              type="text"
              onChange={onChange}
            />
          </label>
          <label htmlFor="email">
            <Input
              placeholder="Email"
              name="email"
              id="email"
              type="email"
              onChange={onChange}
            />
          </label>
          <FormParagraph>Message</FormParagraph>
          <TextArea />
          <FormButton onClick={handleButtonClick}>Send</FormButton>
        </Form>
      </FooterSection>
    </StyledFooter>
  );
};

export default Footer;
