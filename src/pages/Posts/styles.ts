import styled from 'styled-components';

export const CardPost = styled.div`
  width: 100%;
  text-align: start;
  border-radius: 4px;
  border: none;
  padding: 20px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  background: ${({theme}) => theme.colors.background.main};
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out;

  h2{
    font-size: 18px;
    font-weight: 500;

    white-space: nowrap;
    width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p{
    opacity: 0.8;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }

  svg{
    transition: fill 0.2s ease-in-out;
  }

  header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  & + & {
    margin-top: 16px;
  }

  &:hover{
    transform: scale(1.02);
    background: ${({theme}) => theme.colors.background.light};
    svg{
      fill: ${({theme}) => theme.colors.primary.light};
    }
  }
`;

export const LoadMore = styled.button`
  width: 100%;
  padding: 8px;
  margin-top: 16px;
  transition: all 0.2s ease-in-out;

  border: none;
  background: ${({theme}) => theme.colors.primary.lighter};
  opacity: 0.2;

  span{
    font-size: 16px;
    font-weight: bold;
    color: ${({theme}) => theme.colors.primary.main};
    transition: color 0.2s ease-in-out;
  }


  &:hover{
    background: ${({theme}) => theme.colors.primary.main};
    opacity: 1;

    span{
      color: ${({theme}) => theme.colors.primary.lighter};
    }
  }
`;
