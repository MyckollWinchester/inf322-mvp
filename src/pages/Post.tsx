import { useEffect, useState } from 'react'
import postData from '../mocks/posts.json'
import '../stylesheets/main.scss'
import Post from '../components/Post'
import { useParams } from 'react-router-dom'

export default function HomePage() {
  const { id } = useParams<{ id: string }>();

  const post = postData.find(post => post.post_id === parseInt(id ?? '0'))

  if (!post) {
    return <h1>Publicación no encontrada</h1>
  }

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

  const [_, setPosts] = useState<Post[]>([])

  useEffect(() => setPosts(postData), [])

  return (
    <main className="content">
      <div className="container">
        <div className="main-header-p">
          Publicación
        </div>
        <div className="main-header-p__container">
          <Post key={post.post_id} {...post} />
        </div>
      </div>
    </main>
  )
}
