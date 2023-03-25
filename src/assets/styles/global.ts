import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    color: ${({theme}) => theme.colors.text};
  }

  body{
    padding: 0 16px;
    background: ${({theme}) => theme.colors.background.dark};
  }

  button{
    cursor: pointer;
  }
`;
