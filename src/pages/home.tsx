import { Container, Cover } from './styles'
import { Profile } from './components/profile'
import { SearchForm } from './components/search-form'
import styled from 'styled-components'

export const PostWrapper = styled.div`
max-width: 864px;
margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`

export const Post = styled.div`
  padding: 2rem;
  border-radius: 0.5rem;
  margin-top: 2rem;
  background-color: ${({ theme }) => theme.colors['base-post']};

  p {
    display: -webkit-box;
    height: 112px;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: ${({ theme }) => theme.font.size['lg']};
    line-height: 160%;
  }
`
export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.125rem;
  h2 {
    font-size: ${({ theme }) => theme.font.size['lg']};
    color: ${({ theme }) => theme.colors['base-title']};
    flex-grow: 1;
    max-width: 70%;
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
      <PostWrapper>
        <Post>
          <PostHeader>
            <h2>JavaScript data types and data structures</h2>
            <span>há 1 dia</span>
          </PostHeader>
          <p>
            Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

            Dynamic typing
            JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

            let foo = 42; // foo is now a number
            foo = 'bar'; // foo is now a string
            foo = true; // foo is now a boolean
          </p>
        </Post>
        <Post>
          <PostHeader>
            <h2>JavaScript data types and data structures</h2>
            <span>há 1 dia</span>
          </PostHeader>
          <p>
            Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

            Dynamic typing
            JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

            let foo = 42; // foo is now a number
            foo = 'bar'; // foo is now a string
            foo = true; // foo is now a boolean
          </p>
        </Post>
        <Post>
          <PostHeader>
            <h2>JavaScript data types and data structures</h2>
            <span>há 1 dia</span>
          </PostHeader>
          <p>
            Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

            Dynamic typing
            JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

            let foo = 42; // foo is now a number
            foo = 'bar'; // foo is now a string
            foo = true; // foo is now a boolean
          </p>
        </Post>
        <Post>
          <PostHeader>
            <h2>JavaScript data types and data structures</h2>
            <span>há 1 dia</span>
          </PostHeader>
          <p>
            Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

            Dynamic typing
            JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

            let foo = 42; // foo is now a number
            foo = 'bar'; // foo is now a string
            foo = true; // foo is now a boolean
          </p>
        </Post>
        <Post>
          <PostHeader>
            <h2>JavaScript data types and data structures</h2>
            <span>há 1 dia</span>
          </PostHeader>
          <p>
            Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

            Dynamic typing
            JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

            let foo = 42; // foo is now a number
            foo = 'bar'; // foo is now a string
            foo = true; // foo is now a boolean
          </p>
        </Post>
      </PostWrapper>
    </Container>
  )
}
