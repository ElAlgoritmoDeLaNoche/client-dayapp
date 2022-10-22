import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Roboto', sans-serif;
    transition: all .5s linear;
  }
  p {
    line-height: 1.4rem;
  }
  .name {
    color: ${({ theme }) => theme.texto};
    font-weight: bold;
    font-size: 20px;
  }
  .fa-pencil, .fa-pen-to-square, .fa-trash, .fa-arrow-right-from-bracket {
    color: ${({ theme }) => theme.fas};
  }
`;

export const lightTheme = {
  body: '#e3e1e1',
  text: '#f3f3f3',
  primary: '#6200ee',
  Link: '#121212',
  texto: '#121212',
  fas: '#121212',
}

export const darkTheme = {
  body: '#212354',
  text: '#f3f3f3',
  primary: '#bb86fc',
  Link: '#f3f3f3',
  texto: '#f3f3f3',
  fas: '#121212'
}