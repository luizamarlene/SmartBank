import React from "react";
import {Titulo} from "../Titulo";
import Conta from "../Conta";
import { Container, Conteudo } from "./styles";
import Extrato from "../Extrato";
import Footer from '../Footer';

export default () => {
  return (
    <Container>
      <Titulo>Olá, Lavinne!</Titulo>
      <Conteudo>
        <Conta />
        <Extrato/>
      </Conteudo>
    
    </Container>
  );
};


