import { BrowserRouter, Route, Routes } from 'react-router'
import { Home } from './pages/home'
import { Post } from './pages/post'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts/:postId" element={<Post />} />
        {/* TODO: make a 404 page */}
        {/* <Route path="*" element={<h2>oi </h2>} /> */}
      </Routes>
    </BrowserRouter>
  )
}
