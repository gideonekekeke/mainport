import React from "react";
import styled from "styled-components";
import HeaderComponent from "../Component/HeaderComponent";

const HomeScreen = () => {
  return <Container></Container>;
};

export default HomeScreen;

const Container = styled.main`
  height: 100vh;
  width: 100vw;
  position: relative;

  &:before {
    background: url("/images/home-background.png"); center center / cover fixed
    no-repeat;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    botton: 0;
  }
`;
