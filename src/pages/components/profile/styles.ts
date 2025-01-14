import styled from 'styled-components'

export const Container = styled.div`
  margin: -3.65rem auto 0;
  padding: 2rem 2.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 864px;
  background-color: ${({ theme }) => theme.colors['base-profile']};
  border-radius: 10px;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;

    h2 {
      font-size: ${({ theme }) => theme.font.size['2xl']};
      color: ${({ theme }) => theme.colors['base-title']};
    }

    a {
      color: ${({ theme }) => theme.colors['blue']};
      text-transform: uppercase;
      font-family: ${({ theme }) => theme.font.family};
      font-weight: bold;
      font-size: ${({ theme }) => theme.font.size['sm']};
    }
  }

  p {
    color: ${({ theme }) => theme.colors['base-text']};
    margin-bottom: 1.5rem;
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
