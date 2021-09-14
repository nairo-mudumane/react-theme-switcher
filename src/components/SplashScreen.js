import React from 'react';
import styled from 'styled-components';
import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';

const Page = styled.div`
  * {
    padding: 0;
    margin: 0;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.pageBackground};
  transition: all 0.5s ease;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.titleColor};
  transition: all 0.5s ease;
`;

const TagLine = styled.span`
  color: ${(props) => props.theme.TagLineColor};
  font-size: 18px;
  transition: all 0.5s ease;
`;

const Toggle = styled.button`
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 50%50%;
  border: 0;
  background-color: ${(props) => props.theme.pageBackground};
  color: ${(props) => props.theme.pageBackground};
  &:focus {
    outline: none;
  }
  transition: all 0.5s ease;
`;

export default function Splash(props) {
  function changeTheme() {
    if (props.theme === 'light') {
      props.setTheme('dark');
    } else {
      props.setTheme('light');
    }
  }
  const icon =
    props.theme === 'light' ? <HiMoon size={40} /> : <CgSun size={40} />;
  return (
    <Page>
      <Container>
        <Toggle onClick={changeTheme}>Change {icon}</Toggle>
        <Title>Theme Switcher</Title>
        <TagLine>Nairo Mudumane!</TagLine>
      </Container>
    </Page>
  );
}
