import { Container, Cover, Post, PostHeader, PostWrapper } from './styles'
import { Profile } from './components/profile'
import { SearchForm } from './components/search-form'

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
