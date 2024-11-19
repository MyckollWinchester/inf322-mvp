import '../stylesheets/main.scss'
import '../stylesheets/profile.scss'
import users from '../mocks/users.json'
import { useParams } from 'react-router-dom';
import Post from '../components/Post';

export default function Profile() {
  const { id } = useParams<{ id: string }>();

  const user = users.find(user => user.id === parseInt(id ?? '0'))

  if (!user) {
    return <h1>Usuario no encontrado</h1>
  }

  return (
    <main className="content">
      <div className="container">
        <div className="main-header-p">
          <div className="main-header-p__container">
            Perfil de {user.name}
          </div>
        </div>
        <div className='profile'>
          <img src={new URL('../assets/profile-header.jpg', import.meta.url).href} className="profile__header" />
          <img src={new URL(`../assets/pfp/${user.avatar}`, import.meta.url).href} className="profile__pfp" />
          <h1 className="profile__name">{user.name}</h1>
          <h2 className="profile__profession">{user.profession}</h2>
          <div className="profile__stars-container">
            <img src={new URL('../assets/icons/star.svg', import.meta.url).href} className="profile__stars-icon" />
            <span className="profile__stars">{user.rating}</span>
          </div>
          <div className="profile__distance">
            <img src={new URL('../assets/icons/pinpoint.svg', import.meta.url).href} className="inline-svg" />
            A {user.distance} km de tu ubicación
          </div>
        </div>
        {user.posts.map(post => (<Post key={post.post_id} {...post} />))}
      </div>
    </main>
  )
}
