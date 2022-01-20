import { PictureAsPdfOutlined } from "@material-ui/icons";
import React from "react";

import styled from "styled-components";
import pic from "../img/2.png";
import { animateScroll as scroll, Link } from "react-scroll";

const HeaderView = () => {
  return (
    <HeaderContainer>
      <Logo
        onClick={() => {
          scroll.scrollToTop();
        }}
      >
        Gideon Ekeke
      </Logo>
      <Link duration={1000} activeClass="active" smooth={true} to="home">
        <Content1>Home</Content1>
      </Link>
      <Link
        offset={-70}
        duration={1000}
        activeClass="active"
        smooth={true}
        to="body"
      >
        <Content1>Body</Content1>
      </Link>
      <Content1>Projects</Content1>
      <Link
        offset={-70}
        duration={1000}
        activeClass="active"
        smooth={true}
        to="gallery"
      >
        <Content1>Gallery</Content1>
      </Link>
    </HeaderContainer>
  );
};

export default HeaderView;

const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  background-color: #2d2e32;
  justify-content: space-around;
  align-items: center;
  display: flex;
  color: white;
  position: fixed;
`;

const Logo = styled.div`
  height: 50px;
  width: 50px;
  object-fit: cover;
`;
const Content1 = styled.div``;

//#2D2E32  //#25262A

// white color

//#C8C8C9
