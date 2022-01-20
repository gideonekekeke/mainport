import React from "react";
import styled from "styled-components";

import ProjectsProps from "./ProjectsProps";
import pic1 from "../img/sk.jpg";
import pic2 from "../img/ap2.jpg";
import pic3 from "../img/ap3.png";
import pic4 from "../img/ap4.png";
import pic5 from "../img/ap5.jpg";
import pic6 from "../img/ap6.jpg";

const Projects = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      id="projects"
    >
      <ProjectHolder>PROJECTS</ProjectHolder>
      <Container>
        <ProjectsProps
          title="Weather Application"
          desc="   This is weather app used for checking the weather of a particular
            country or city."
          git="https://github.com/gideonekekeke/React-weather-app"
          site="https://wetherreact.herokuapp.com/"
          pic={pic1}
        />
        <ProjectsProps
          title="Ajegunle Security app"
          desc="its an app that is used to report a case concerning our security."
          git="https://github.com/gideonekekeke/ajegunle-hackaton"
          site="https://security-dev-project.firebaseapp.com/"
          pic={pic2}
        />
        <ProjectsProps
          title="MyService"
          desc="a web app that connects a skilled worker and a person looking for skill worker.(NC) "
          git=""
          site="https://security-dev-project.firebaseapp.com/"
          pic={pic3}
        />
        <ProjectsProps
          title="Udeme Kitchen"
          desc="an e-cormerce food platform..(NC) "
          git=""
          site="https://udemekitchen.herokuapp.com/"
          pic={pic4}
        />
        <ProjectsProps
          title="Todo Webapp"
          desc="a todo app where you create a task to do for the day.(NC) "
          git="https://github.com/gideonekekeke/2do-app"
          site="https://personeltodo.firebaseapp.com/"
          pic={pic5}
        />
        <ProjectsProps
          title="Movie-webapp"
          desc="an e-cormerce movie app...(NC) "
          git=""
          site="https://redux-movie.herokuapp.com/"
          pic={pic6}
        />
      </Container>
    </div>
  );
};

export default Projects;

const ProjectHolder = styled.div`
  margin-top: 40px;
  color: silver;
`;

const Container = styled.div`
  display: flex;
  width: 80%;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;
`;
