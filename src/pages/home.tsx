import { Container, Cover, Post, PostHeader, PostWrapper } from './styles'
import { Profile } from './components/profile'
import { SearchForm } from './components/search-form'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Markdown from 'react-markdown'

interface IPost {
  title: string
  html_url: string
  id: number
  body: string
  created_at: string

}

export function Home() {
  const [posts, setPosts] = useState<IPost[]>([])
  async function fetchPosts() {
    const response = await axios.get(`${import.meta.env.VITE_GITHUB_SEARCH_URL}/issues?q=Boas%20praticas%20repo:rocketseat-education/reactjs-github-blog-challenge`)
    setPosts(response.data.items)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <Container>
      <Cover>
        <img src="/Logo.svg" alt="Github Blog" />
      </Cover>
      <Profile />
      <SearchForm />
      <PostWrapper>
        {posts.map(post => (
          <Post key={post.id} to={`/posts/${post.id}`}>
            <PostHeader>
              <h2>{post.title}</h2>
              <span>{formatDistanceToNow(post.created_at, {
                locale: ptBR,
                addSuffix: true,

              })}
              </span>
            </PostHeader>
            <Markdown className="content">
              {post.body}
            </Markdown>
          </Post>

        ))}
      </PostWrapper>
    </Container>
  )
}
