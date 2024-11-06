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
          <img src="/src/assets/profile-header.jpg" className="profile__header" />
          <img src={`/src/assets/pfp/${user.avatar}`} className="profile__pfp" />
          <h1 className="profile__name">{user.name}</h1>
          <h2 className="profile__profession">{user.profession}</h2>
          <div className="profile__stars-container">
            <img src="/src/assets/icons/star.svg" className="profile__stars-icon" />
            <span className="profile__stars">{user.rating}</span>
          </div>
          <div className="profile__distance">
            <img src="/src/assets/icons/pinpoint.svg" className="inline-svg" />
            A {user.distance} km de tu ubicación
          </div>
        </div>
        {user.posts.map(post => (<Post key={post.post_id} {...post} />))}
      </div>
    </main>
  )
}
