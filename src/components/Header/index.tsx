import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, List, X } from '@phosphor-icons/react';

import { Logo } from '../Logo';
import { Container, LinkMenu, ButtonBack } from './styles';

export function Header(){
  const [pathName, setPathName] = useState('');
  const [menuOpened, setMenuOpened] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const getMenuActive = (path: string) => {
    if(path === pathName){
      return 'active';
    }
  };

  const toggleMenu = () => {
    setMenuOpened((prevState) => !prevState);
  };

  const handleNavigate = (link: string) => {
    navigate(link);
    setMenuOpened(false);
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
        <>
          <button
            className='menu-open'
            onClick={toggleMenu}
          >
            <List size={24} />
          </button>

          <nav className={menuOpened ? 'active' : ''}>
            <div className='header-nav-mobile'>
              <Logo/>

              <button
                className='menu-close'
                onClick={toggleMenu}
              >
                <X size={24} />
              </button>
            </div>

            <LinkMenu
              className={getMenuActive('/')}
              onClick={() => handleNavigate('/')}
            >
              Posts
            </LinkMenu>
            <LinkMenu
              className={getMenuActive('/users')}
              onClick={() => handleNavigate('/users')}
            >
              Usuários
            </LinkMenu>
          </nav>

        </>
      )}
    </Container>
  );
}
