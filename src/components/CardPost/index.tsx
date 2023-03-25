import { ArrowRight } from '@phosphor-icons/react';
import { Container } from './styles';

interface CardPostProps {
  title: string
  body: string
  onClick: () => void
}

export function CardPost({title,body,onClick} : CardPostProps){
  return (
    <Container
      onClick={onClick}
    >
      <header>
        <h2>{title}</h2>
        <ArrowRight size={24}/>
      </header>

      <p>{body}</p>
    </Container>
  );
}
