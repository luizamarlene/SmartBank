import {
  fundoClaro,
  conteudoClaro,
  textoFundoClaro,
  conteudoEscuro,
  fundoEscuro,
  textoFundoEscuro
 
} from "./variaveis";

export const temaEscuro = {
    body: fundoEscuro,
    inside: conteudoEscuro,
    text: textoFundoEscuro,
    filter: 'invert(100%)'
  }
  export const temaClaro = {
    body: fundoClaro,
    inside: conteudoClaro,
    text: textoFundoClaro,
    filter: ''
  }