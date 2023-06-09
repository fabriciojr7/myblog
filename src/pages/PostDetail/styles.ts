import styled, { css } from 'styled-components';

interface CardContentProps{
  type?: string
}

export const CardContent = styled.div<CardContentProps>`
  width: 100%;
  border-radius: 4px;
  padding: 20px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  background:  ${({theme}) => theme.colors.background.main};

  h2{
    font-size: ${({type}) => type === 'comment' ? '18px' : '20px'};
    font-weight: 500;
  }

  span{
    flex: 2;
    color: ${({theme}) => theme.colors.primary.main};
    font-size: 12px;
    font-weight: bold;
    border-radius: 4px;
    padding: 4px 6px;
    text-transform: ${({type}) => type !== 'comment' ? 'uppercase' : 'none'};
    background: ${({theme}) => theme.colors.primary.lighter};
  }

  p{
    display: inline;
    opacity: 0.8;

    &.body{
      display: block;
      margin: ${({type}) => type === 'comment' ? '16px 0' : '16px 0 24px 0'};
    }
  }

  ${({theme, type}) => type === 'comment' && css`
    background: ${theme.colors.background.light};
    & + & {
      margin-top: 8px;
    }
  `}
`;

export const ContainerComments = styled.div`
  padding: 20px;
  background: ${({theme}) => theme.colors.background.main};
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  margin-top: 16px;

  .comments{
    font-size: 18px;
    text-align: center;
    margin-bottom: 16px;
  }

  .empty-comments{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    img{
      width: 120px;
      margin-bottom: 16px;
    }
  }
`;
