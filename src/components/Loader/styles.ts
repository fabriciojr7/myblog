import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;

  h2{
    font-size: 20px;
    opacity: 0.6;
    margin-top: 16px;
    color: ${({theme}) => theme.colors.primary.main}
  }
`;
