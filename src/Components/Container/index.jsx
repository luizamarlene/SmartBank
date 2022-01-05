import React from "react";
import {Titulo} from "../Titulo";
import Conta from "../Conta";
import { Container, Conteudo } from "./styles";

export default () => {
  return (
    <Container>
      <Titulo>Olá Luiza!</Titulo>
      <Conteudo>
        <Conta />
        <Conta />
      </Conteudo>
    </Container>
  );
};


