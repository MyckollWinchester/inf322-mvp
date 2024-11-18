import { NavBarItem } from './NavItem'
import { ButtonBig } from './ButtonBig'
import { Link } from 'react-router-dom'
import iconHome from '../assets/icons/home.svg'
import iconMessages from '../assets/icons/messages.svg'
import iconNotifications from '../assets/icons/notifications.svg'
import iconSettings from '../assets/icons/settings.svg'
import logo from '../assets/logo.svg'
import '../stylesheets/left.scss'
import '../stylesheets/buttons.scss'
import defaultPfp from '../assets/pfp/default1.jpg';

export const NavBar = () => {
  return (
    <aside className='aside-left'>
      <div className="aside-left__content">
        <header className="aside-left__header">
          <div className="aside-left__logo">
            <Link className='aside-left__logo-container' to='/'>
              <img className='aside-left__logo-image' src={logo} alt="" />
              <div className="aside-left__logo-text">HelpMyHome</div>
            </Link>
          </div>
        </header>
        <nav className='navbar'>
          <NavBarItem icon={iconHome} text='Inicio' to='/' />
          <NavBarItem icon={iconMessages} text='Mensajes' to='/chat/1' />
          <NavBarItem icon={iconNotifications} text='Notificaciones' to='/notificaciones' />
          <NavBarItem icon={iconSettings} text='Ajustes' to='/ajustes' />
          <ButtonBig text='Crear Post' />
        </nav>
        <button className='aside-left__profile' onClick={() => alert('Mi perfil no implementado')}>
          <img className='aside-left__profile-image' src={defaultPfp} alt='Foto de perfil' />
          <div className='aside-left__profile-name'>Nombre de perfil</div>
        </button>
      </div>
    </aside>
  )
}

export default NavBar
