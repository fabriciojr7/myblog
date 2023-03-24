import styled from 'styled-components';

export const Container = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button{
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    background: transparent;

    &.menu-open{
      display: none;
    }
  }

  nav{
    display: flex;
    gap: 16px;

    .header-nav-mobile{
      display: none;
    }
  }

  @media screen and (max-width: 460px){
    button.menu-open{
      display: flex;
    }

    nav{
      display: none;

      &.active{
        display: flex;
        flex-direction: column;

        text-align: center;
        padding: 16px;

        position: fixed;
        inset: 0;

        z-index: 10;
        background: ${({theme}) => theme.colors.background.main};

        > span{
          padding: 16px;
        }

        .header-nav-mobile{
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;

          h1{
            font-size: 32px;
          }
        }
      }
    }
  }
`;

export const LinkMenu = styled.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover{
    background: ${({theme}) => theme.colors.primary.light};
  }

  &.active{
    background: ${({theme}) => theme.colors.primary.main};
  }

`;

export const ButtonBack = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  outline: none;
  border: none;
  background: transparent;

  span{
    font-weight: bold;
  }

  svg{
    font-size: 24px;
  }

  &:hover{
    span, svg{
      color: ${({theme}) => theme.colors.primary.light};
      fill: ${({theme}) => theme.colors.primary.light};
    }
  }
`;
