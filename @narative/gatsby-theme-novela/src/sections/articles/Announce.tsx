import React from "react";
import styled from "@emotion/styled";
import mediaqueries from "@styles/media";
import Headings from "@components/Headings";


const Announce: React.FC<{}> = () => {

  return (
    <Container>
      <Headings.h2>
        We moved to a new home
      </Headings.h2>
    <Desc>The domain awesomefigmatips.com won't be available after Feb 25, 2022</Desc>
    <Desc>New domain: <strong>awesomefigtips.com</strong></Desc>
    <ButtonLink href="https://awesomefigtips.com/" data-a11y="false" target="_blank">
    Let's Go →
    </ButtonLink>
    </Container>
  );
};

export default Announce;

const Container = styled.div`
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background-color: ${p => p.theme.colors.accent};
    color:  ${p => p.theme.colors.primary};
    text-align: center;
    position: absolute;
    top: -80px;
    left: -80px;
    z-index: 100;
    padding: 120px 90px 90px 90px;

    ${mediaqueries.tablet`
       display: none;
    `}
`;

const Desc = styled.p`
    font-size: 18px;
    line-height: 26px;
    padding-bottom: 12px;
`;

const ButtonLink = styled.a`
  padding: 12px 16px;
  box-sizing: border-box;
  border: 1px solid ${p => p.theme.colors.secondary};
  color: ${p => p.theme.colors.primary};
  background-color: transparent;
  font-size: 18px;
  opacity: 1;
  text-align: center;
  transition: background-color 0.25s ease 0s;
  display: inline-block;

  &:hover {
    background-color: ${p => p.theme.colors.secondary};
    color: ${p => p.theme.colors.background};
  }
`;
