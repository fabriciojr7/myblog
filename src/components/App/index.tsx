import { ThemeProvider } from 'styled-components';
import { themeDefault } from '../../styles/themes/default';
import GlobalStyles from '../../styles/global';
import { AppRoutes } from '../../routes/AppRoutes';

export function App() {
  return (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyles/>
      <AppRoutes/>
    </ThemeProvider>
  );
}
