import { useEffect, useState } from 'react'
import postData from '../mocks/posthelp.json'
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
            {/* <a href="/" className="main-header__category__item">Ser Ayudado</a> */}
            <Link to="/" className="main-header__category__item">Ser Ayudado</Link>
            <a className="main-header__category__item main-header__category__item--selected">Ayudar</a>
          </div>
          {posts.map(post => (
            <Post key={post.post_id} {...post} />
          ))}
        </div>
      </div>
    </main>
  )
}
