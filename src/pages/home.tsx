import styled from 'styled-components'
import { Container } from './styles'
import { Profile } from './components/profile'
import { SearchForm } from './components/search-form'

const Cover = styled.div`
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

export function Home() {
  return (
    <Container>
      <Cover>
        <img src="/Logo.svg" alt="Github Blog" />
      </Cover>
      <Profile />
      <SearchForm />
    </Container>
  )
}
