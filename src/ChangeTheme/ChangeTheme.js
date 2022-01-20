import { Button } from "antd";
import React, { useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import storage from "local-storage-fallback";

const GlobalStyle = createGlobalStyle`
body{
  background-color :${({ theme }) =>
    theme.myTheme === "dark" ? "#22272E" : "white"};

color : ${({ theme }) => (theme.myTheme === "dark" ? "white" : "black")}
}
`;

const ChangeTheme = () => {
  const storageThemeChoice = () => {
    const savedTheme = storage.getItem("toggle");

    return savedTheme ? JSON.parse(savedTheme) : { myTheme: "light" };
  };
  const [toggle, setToggle] = useState(storageThemeChoice);

  React.useEffect(() => {
    storage.setItem("toggle", JSON.stringify(toggle));
  }, [toggle]);

  return (
    <ThemeProvider theme={toggle}>
      <GlobalStyle />
      <Container>
        <Content>This is my Screen</Content>
        <Button
          onClick={() => {
            setToggle(
              toggle.myTheme === "dark"
                ? { myTheme: "light" }
                : { myTheme: "dark" }
            );
          }}
          style={{
            height: "40px",
            width: "120px",
            cursor: "pointer",
            marginTop: "30px",
          }}
        >
          Change Theme
        </Button>
      </Container>
    </ThemeProvider>
  );
};

export default ChangeTheme;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  height: 100vh;
  width: 100%;
  flex-direction: column;
`;

const Content = styled.div``;
