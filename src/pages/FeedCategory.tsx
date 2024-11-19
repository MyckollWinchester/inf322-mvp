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

  let categoryText = "";

  switch (category) {
    case "jardineria":
      categoryText = "Jardinería";
      break;
    case "fontaneria":
      categoryText = "Fontanería";
      break;
    case "electrodomesticos":
      categoryText = "Electrodomésticos";
      break;
    default:
      categoryText = "Categoría no encontrada";
  }


  return (
    <main className="content">
      <div className="container">
        <div className="main-header">
          <div className="main-header__category">
            <a className="main-header__category__item main-header__category__item--selected">Servicios</a>
            <Link to="/help" className="main-header__category__item">Solicitudes</Link>
          </div>
          <div className="header-not notification">
            Publicaciones de {categoryText}
          </div>
          {filteredPosts.map(post => (
            <Post key={post.post_id} {...post} />
          ))}
        </div>
      </div>
    </main>
  )
}
