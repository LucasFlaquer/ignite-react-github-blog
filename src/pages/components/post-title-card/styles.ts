import styled from 'styled-components'

export const Container = styled.div`
  margin: -3.65rem auto 0;
  padding: 2rem 2.5rem;
  max-width: 864px;
  background-color: ${({ theme }) => theme.colors['base-profile']};
  border-radius: 10px;
  
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${({ theme }) => theme.colors['blue']};
      text-transform: uppercase;
      font-family: ${({ theme }) => theme.font.family};
      font-weight: bold;
      font-size: ${({ theme }) => theme.font.size['xs']};
      text-decoration: none;
    }
  }
  h1 {
    font-size: ${({ theme }) => theme.font.size['2xl']};
    color: ${({ theme }) => theme.colors['base-title']};
    margin-bottom: 1rem;
    margin-top: 1.25rem;
  }
`

export const Info = styled.div`  
  display: flex;
  gap: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    span {
      font-family: ${({ theme }) => theme.font.family};
      font-size: ${({ theme }) => theme.font.size['md']};
      color: ${({ theme }) => theme.colors['base-subtitle']};
    }

  }
`
