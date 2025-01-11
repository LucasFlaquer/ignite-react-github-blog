import styled from 'styled-components'

export const Container = styled.div`
  margin: 4.5rem auto 0;
  max-width: 864px;

  form {
    input {
      padding: 0.75rem 1rem;
      width: 100%;
      border-radius: 8px;
      background-color: ${({ theme }) => theme.colors['base-input']};
      border: 1px solid ${({ theme }) => theme.colors['base-border']};

      &::placeholder {
        color: ${({ theme }) => theme.colors['base-label']};
      }
    }
  }

`

export const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;

  h2 {
    font-size: ${({ theme }) => theme.font.size['lg']};
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
  span {
    font-size: ${({ theme }) => theme.font.size['sm']};
    color: ${({ theme }) => theme.colors['base-span']};
  }
`
