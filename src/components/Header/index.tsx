import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from '@phosphor-icons/react';

import { Logo } from '../Logo';
import { Container, ButtonBack } from './styles';

export function Header(){
  const [pathName, setPathName] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const getMenuActive = (path: string) => {
    if(path === pathName){
      return 'active';
    }
  };

  useEffect(() => {
    setPathName(location.pathname);
  }, [location.pathname]);

  return (
    <Container>
      <Logo/>

      {(pathName !== '/') && (pathName !== '/users') ? (
        <ButtonBack onClick={() => navigate(-1)}>
          <ArrowLeft />
          <span>Voltar</span>
        </ButtonBack>
      ): (
        <nav>
          <Link to={'/'} className={getMenuActive('/')}>Posts</Link>
          <Link to={'/users'} className={getMenuActive('/users')}>Usuários</Link>
        </nav>
      )}
    </Container>
  );
}
