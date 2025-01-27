import { useParams } from 'react-router'
import { PostTitleCard } from './components/post-title-card'
import { Container, Cover } from './styles'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Markdown from 'react-markdown'
import styled from 'styled-components'

export function Post() {
  const params = useParams <{ postId: string }>()
  const [postContent, setPostContent] = useState('')

  async function fetchPost() {
    const response = await axios.get(`${import.meta.env.VITE_GITHUB_SEARCH_URL}/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${params.postId}`)
    setPostContent(response.data.body)
  }

  useEffect(() => {
    fetchPost()
  }, [])

  useEffect(() => {
    console.log(params)
  }, [])

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
      <ContentContainer>
        <Markdown className="content">
          {postContent}
        </Markdown>
      </ContentContainer>
    </Container>
  )
}

const ContentContainer = styled.div`
  margin: 3rem auto 0;
  max-width: 864px;

  p {
    margin-bottom: 1.5rem;
  }
  
  img {
    max-width: 100%;
  }
`
