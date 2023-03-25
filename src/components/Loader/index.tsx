import { MoonLoader } from 'react-spinners';
import { Container } from './styles';

interface LoaderProps{
  loading: boolean
}

export function Loader({loading}: LoaderProps){
  if(!loading){
    return null;
  }

  return (
    <Container>
      <MoonLoader color='#1153fc'/>
      <h2>Carregando...</h2>
    </Container>
  );
}
