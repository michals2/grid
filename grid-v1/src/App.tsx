import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const StyledApp = styled.div`
  height: 100vh;
  width: 100vw;

  display: grid;
  grid-template-areas:
    "launcher explorer viewer"
    "footer footer footer";
  grid-template-rows: auto 20px;
  grid-template-columns: 50px 200px auto;
`;

const StyledLauncher = styled.div`
  grid-area: launcher;
`;
const StyledExplorer = styled.div`
  grid-area: explorer;
`;
const StyledViewer = styled.div`
  grid-area: viewer;
`;
const StyledFooter = styled.div`
  grid-area: footer;
`;

export default () => {
  return (
    <StyledApp className="App">
      <GlobalStyle />
      <StyledLauncher>launcher</StyledLauncher>
      <StyledExplorer>explorer</StyledExplorer>
      <StyledViewer>viewer</StyledViewer>
      <StyledFooter>footer</StyledFooter>
    </StyledApp>
  );
};
