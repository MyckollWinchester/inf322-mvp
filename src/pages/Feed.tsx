import { useEffect, useState } from 'react'
import postData from '../mocks/posts.json'
import '../stylesheets/main.scss'
import Post from '../components/Post'
import { Link } from 'react-router-dom'

export default function HomePage() {
  interface Post {
    post_id: number;
    author: string;
    author_handler: string;
    avatar: string;
    time: string;
    location: string;
    content: string;
    image?: string;
  }

  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => setPosts(postData), [])

  return (
    <main className="content">
      <div className="container">
        <div className="main-header">
          <div className="main-header__category">
            <a className="main-header__category__item main-header__category__item--selected">Ser Ayudado</a>
            {/* <a href="/help" className="main-header__category__item">Ayudar</a> */}
            <Link to="/help" className="main-header__category__item">Ayudar</Link>
          </div>
          {posts.map(post => (
            <Post key={post.post_id} {...post} />
          ))}
        </div>
      </div>
    </main>
  )
}
