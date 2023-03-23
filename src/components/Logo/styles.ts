import styled from 'styled-components';

export const Container = styled.h1`
  font-size: 32px;
  span{
    color: ${({theme}) => theme.colors.primary.main};
  }
`;
