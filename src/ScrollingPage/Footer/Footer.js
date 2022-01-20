import React, { Fragment } from "react";
import styled from "styled-components";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";

// import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { animateScroll as scroll, Link } from "react-scroll";

let date = new Date().getFullYear();
console.log(date);

const Footer = () => {
  return (
    <Fragment>
      <BottomTab>
        <Tab>
          <Link
            onClick={() => {
              scroll.scrollToTop();
            }}
            to="/"
          >
            <WrapperHolder>
              <MdKeyboardArrowLeft
                style={{ fontSize: "30px", color: "#64F4AB" }}
              />
              <span>Gideon Ekeke</span>
              <MdKeyboardArrowRight
                style={{ fontSize: "30px", color: "#64F4AB" }}
              />
            </WrapperHolder>
          </Link>
          <span>Developed by Gideon 💻 | © {date} All rights reserved </span>
          <SocialLinks>
            <a
              href=""
              // rel="noopener noreferrer"
              target="_blank"
            >
              <FaFacebookSquare style={{ color: "silver" }} />
            </a>

            <a
              href=""
              // rel="noopener noreferrer"
              target="_blank"
            >
              <FaInstagram style={{ color: "silver" }} />
            </a>
            <a
              href=""
              // rel="noopener noreferrer"
              target="_blank"
            >
              <FaYoutube style={{ color: "silver" }} />
            </a>
          </SocialLinks>
        </Tab>
      </BottomTab>
    </Fragment>
  );
};

export default Footer;

const WrapperHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ContentWrapper = styled.div``;
const ContentWrapperm = styled.div`
  margin-left: 70px;

  @media screen and (max-width: 600px) {
    margin-left: 17px;
  }
`;
const ContentText1 = styled.div`
  font-weight: bold;
`;
const ContentText2 = styled.div`
  font-weight: 300;

  @media screen and (max-width: 600px) {
    font-size: 10px;
    width: ;
  }
`;

const Container = styled.div`
  /* height: 300px; */
  width: 100%;
  margin-top: 20px;

  background: #25262a;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: grid;
  margin: 10px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  width: 80%;
  justify-content: center;
  margin-left: 150px;
  /* background-color: red; */
  /* align-items: center; */
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin: 0;
    width: 100%;
    margin-left: 10px;
    padding-top: 10px;
    padding-bottom: 20px;
  }
`;

const Tab = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 40px;
`;

const BottomTab = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  background-color: #25262a;
  color: black;
  align-items: center;
  color: silver;
  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
  /* padding: 0 15px; */
`;
const SocialLinks = styled.div`
  font-size: 35px;
  height: 100%;
  display: flex;
  align-items: center;
  width: 170px;
  justify-content: space-between;
  /* background-color: red; */

  a {
    color: white;
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 600px) {
    font-size: 10px;
    width: 70px;
  }
`;
const Logo = styled.img`
  width: 150px;
  height: 40px;
  object-fit: contain;
`;
