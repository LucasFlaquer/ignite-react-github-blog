import { PostTitleCard } from './components/post-title-card'
import { Container, Cover } from './styles'

export function Post() {
  return (
    <Container>
      <Cover>
        <img src="/Logo.svg" alt="Github Blog" />
      </Cover>
      <PostTitleCard />
    </Container>
  )
}
