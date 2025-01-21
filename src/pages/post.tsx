import { PostTitleCard } from './components/post-title-card'
import { Container, Cover } from './styles'

export function Post() {
  return (
    <Container>
      <Cover>
        <img src="/Logo.svg" alt="Github Blog" />
      </Cover>
      <PostTitleCard
        comments={4}
        createdAt={new Date('2025-01-12')}
        githubUrl="http://github.com/lucaslfauqer"
        title="Javascript titulo aqui"
        username="lucasflaquer"
      />
    </Container>
  )
}
