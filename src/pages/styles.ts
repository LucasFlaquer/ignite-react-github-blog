import styled from 'styled-components'

export const Container = styled.div`
  /* height: 100vh; */
  background-color: ${({ theme }) => theme.colors['base-background']};
  
`
export const Cover = styled.div`
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

export const PostWrapper = styled.div`
  max-width: 864px;
  margin: 2rem auto 10rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`

export const Post = styled.div`
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors['base-post']};

  >.content {
    max-width: 352px;
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
