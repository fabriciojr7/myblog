import styled from 'styled-components';

export const Container = styled.div`
  h2{
    font-size: 20px;
  }
`;

export const Card = styled.div`
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 20px;
  background: ${({theme}) => theme.colors.background.main};
  margin-top: 8px;

  &.data-user{
    margin-bottom: 24px;
  }

  header{
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    h3{
      font-size: 16px;
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
      opacity: 1;
    }
  }

  .box{
    display: flex;
    gap: 40px;
  }

  &.data-address{

    div + div{
      margin-top: 8px;
    }
  }

  span{
    font-size: 14px;
    opacity: 0.8;
    display: flex;
    align-items: center;
    gap: 8px;

    &.site{
      margin-top: 8px;
    }
  }
`;
