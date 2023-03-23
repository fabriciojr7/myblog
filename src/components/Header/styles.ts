import styled from 'styled-components';


export const Container = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav{
    display: flex;
    gap: 16px;
  }

  a{
    padding: 4px 8px;
    text-decoration: none;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;

    &:hover{
      background: ${({theme}) => theme.colors.primary.light};
    }

    &.active{
      background: ${({theme}) => theme.colors.primary.main};
    }
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
