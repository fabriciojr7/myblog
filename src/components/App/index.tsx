import { ThemeProvider } from 'styled-components';
import { themeDefault } from '../../styles/themes/default';
import GlobalStyles from '../../styles/global';
import { AppRoutes } from '../../routes/AppRoutes';
import { Header } from '../Header';
import { Container, Content } from './styles';
import { Footer } from '../Footer';

export function App() {
  return (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyles/>

      <Container>
        <Header/>

        <Content>
          <AppRoutes/>
        </Content>

        <Footer/>
      </Container>
    </ThemeProvider>
  );
}
