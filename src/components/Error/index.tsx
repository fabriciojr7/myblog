import { Container } from './styles';

import error from '../../assets/images/error.svg';

export function Error(){
  return (
    <Container>
      <img src={error} alt="" />
      <h2>Erro ao buscar os dados, tente novamente mais tarde!</h2>
    </Container>
  );
}
