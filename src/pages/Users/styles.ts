import styled from 'styled-components';

export const CardUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 20px;
  background: ${({theme}) => theme.colors.background.main};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  & + & {
    margin-top: 16px;
  }

  header{
    display: flex;
    align-items: center;
  }

  h2{
    font-size: 18px;
    font-weight: 500;
    margin-right: 16px;
  }

  span{
    color: ${({theme}) => theme.colors.primary.main};
    font-size: 12px;
    font-weight: bold;
    border-radius: 4px;
    padding: 4px 6px;
    text-transform: uppercase;
    background: ${({theme}) => theme.colors.primary.lighter};
  }

  p{
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    margin: 8px 0;
    opacity: 0.8;
  }

  .icone{
    svg{
      transition: fill 0.2s ease-in-out;
    }
  }

  &:hover{
    background: ${({theme}) => theme.colors.background.light};
    transform: scale(1.02);

    .icone{
      svg{
        fill: ${({theme}) => theme.colors.primary.light};
      }
    }
  }
`;
