import '../stylesheets/main.scss'
import '../stylesheets/mini_profile.scss'
import users from '../mocks/users.json'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import StarRating from './Rating';
import { toast, ToastContainer, Bounce } from 'react-toastify';

export default function MiniProfile() {
  const { id } = useParams<{ id: string }>();

  const user = users.find(user => user.id === parseInt(id ?? '0'))

  const handleRatingChange = (rating: number) => {
    console.log("Calificación seleccionada:", rating);
    toast("test");
  };


  if (!user) {
    return <h1>Usuario no encontrado</h1>
  }

  return (
    <div className="geibriel-container">
      <div className="main-header-p">
        <div className="main-header-p__container">
          Estás hablando con...
        </div>
      </div>
      <div className='mini-profile'>
        <img src="/src/assets/profile-header.jpg" className="mini-profile__header" />
        <img src={`/src/assets/pfp/${user.avatar}`} className="mini-profile__pfp" />
        <h1 className="mini-profile__name">
          <Link to={`/profile/${user.id}`} className="mini-profile__name-link"><span className="link-to">{user.name}</span></Link>
        </h1>
        <h2 className="mini-profile__profession">{user.profession}</h2>
        <div className="mini-profile__stars-container">
          <img src="/src/assets/icons/star.svg" className="mini-profile__stars-icon" />
          <span className="mini-profile__stars">{user.rating}</span>
        </div>
        <div className="mini-profile__distance">
          <img src="/src/assets/icons/pinpoint.svg" className="inline-svg" />
          A {user.distance} km de tu ubicación
        </div>
        <div className='mini-profile__rating'>
          <h1>Califica tu experiencia</h1>
          <StarRating totalStars={5} onRatingChange={handleRatingChange} />
        </div>
      </div>

    </div>
  )
}
