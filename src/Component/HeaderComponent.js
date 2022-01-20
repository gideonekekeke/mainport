import React from "react";
import { CgMenu } from "react-icons/cg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <Container>
      <Link>
        <Logo src="/images/8.png" />
      </Link>

      <Wrapper>
        <a>
          <img src="/images/home-icon.svg" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" />
          <span>search</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" />
          <span>Series</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" />
          <span>Moivies</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" />
          <span>Original</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" />
          <span>Watchlist</span>
        </a>
      </Wrapper>
    </Container>
  );
};

export default HeaderComponent;

const Container = styled.div`
  height: 70px;
  width: 100vw;
  background-color: #090b13;
  align-items: center;
`;
const Logo = styled.img`
  display: flex;
  align-items: center;
  height: 50px;
  padding-top: 10px;
  object-fit: contain;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    height: 100%;
    postion: relative;
    width: 100%;
  }
  img {
    height: 30px;
    width: 30px;
    object-fit: cover;
  }

  span{
    font-weight: bold;
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: 1.1px
    position: relative;
    opacity: 0.6;

    &:after{
      content:"";
      position: absolute;
      height: 2px;
      background-color: white;
      right: 0;
      left: 20px;
      bottom: 20px;
      opacity: 0;
      transform: scaleX(1);
      transform-origin: center left;
      transition: all 350ms cubic-bezier(0.34, 0.44, 0.96, 0.47) 0s;
    }
  }
  &:hover{
    span{
      opacity: 1;
    }
    span:after {
      opacity: 1;
      transform: scaleX(1.06)
    }
  }
}

`;
