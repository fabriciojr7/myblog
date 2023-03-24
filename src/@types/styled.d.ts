import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: string
      background: {
        light: string
        main: string
        dark: string
      }
      primary: {
        lighter: string
        light: string
        main: string
        dark: string
      },
    }
  }
}
