import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors['base-background']};
  
`
export const Cover = styled.div`
  height: 30%;
  padding: 4rem;
  background-image: url('/Cover.png');
  background-repeat: no-repeat;
  background-size: cover;

  img {
    display: block;
    margin: 0 auto;
    
  }
`
