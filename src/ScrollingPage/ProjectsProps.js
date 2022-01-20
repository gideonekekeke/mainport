import React from "react";
import styled from "styled-components";

import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProjectsProps = ({ git, site, title, desc, pic }) => {
  return (
    <>
      <MainCard>
        <HoverTitle>
          <a style={{ textDecoration: "none", color: "white" }} href={git}>
            <AiFillGithub style={{ cursor: "pointer", fontSize: "20px" }} />
          </a>
        </HoverTitle>
        <CardImage src={pic} />
        <CardTitle>{title}</CardTitle>
        <CardTitle2>{desc}</CardTitle2>
        <a style={{ color: "#64f4ab" }} href={site}>
          <FirstText5>Visit Site</FirstText5>
        </a>
      </MainCard>
    </>
  );
};

export default ProjectsProps;

const FirstText5 = styled.div`
  color: #64f4ab;
  /* margin-top: 10px; */
  /* letter-spacing: 3px; */
  border-bottom-color: #64f4ab;
  font-size: 12px;
  margin: 5px;

  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

const HoverTitle = styled.div`
  display: none;
  height: 90px;
  width: 210px;
  color: white;
`;

const CardTitle2 = styled.div`
  color: white;
  font-size: 8px;
  margin: 5px;
  width: 205px;
`;

const CardTitle = styled.div`
  color: white;
  font-size: 12px;
  margin: 5px;
`;

const CardImage = styled.img`
  height: 90px;
  width: 100%;
  background-color: red;
  background: rgba(0%, 0%, 0%, 1);
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const MainCard = styled.div`
  height: 190px;
  width: 210px;
  background-color: #2d2e32;
  border-radius: 5px;
  box-shadow: 0px 5px 7px -2px rgba(0, 0, 0, 0.35);
  margin: 10px;
  flex-direction: column;
  display: flex;

  &:hover ${HoverTitle} {
    display: block;

    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;

    background: rgba(0%, 0%, 0%, 0.2);
  }
`;

const ProjectHolder = styled.div`
  margin-top: 40px;
  color: silver;
`;
