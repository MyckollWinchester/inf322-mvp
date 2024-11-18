import { useEffect, useState } from 'react'
import postData from '../mocks/posts.json'
import '../stylesheets/main.scss'
import Post from '../components/Post'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export default function FeedCategory() {
  const { category } = useParams<{ category: string }>()

  interface Post {
    post_id: number;
    author: string;
    author_handler: string;
    avatar: string;
    time: string;
    location: string;
    content: string;
    category: string;
    image?: string;
  }

  const [posts, setPosts] = useState<Post[]>([])

  const filteredPosts = posts.filter(post => post.category === category)

  useEffect(() => setPosts(postData), [])

  return (
    <main className="content">
      <div className="container">
        <div className="main-header">
          <div className="main-header__category">
            <a className="main-header__category__item main-header__category__item--selected">Ser Ayudado</a>
            <Link to="/help" className="main-header__category__item">Ayudar</Link>
          </div>
          {filteredPosts.map(post => (
            <Post key={post.post_id} {...post} />
          ))}
        </div>
      </div>
    </main>
  )
}
