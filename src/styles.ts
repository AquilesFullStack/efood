import { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#eee',
  laranja: '#E66767',
  amarelo: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-styles: none;
  }

  body{
    backgroud-color: ${cores.branco};
    color: ${cores.laranja};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;  
  }

  div:empty{
    display:none;
  }
`
