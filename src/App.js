import React, { useState } from "react";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import GlobalStyle from "./Components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { temaEscuro, temaClaro } from "./Components/UI/theme";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";
import Footer from "./Components/Footer";

function App() {
  const [tema,setTema] = useState(true);
  const toggleTema = () => {
    setTema(
      (tema) => !tema
    );
  }

  return (
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema}/>
      </BtnTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  )}
export default App;
