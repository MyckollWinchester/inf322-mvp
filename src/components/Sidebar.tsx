import { NavBarItem } from './NavItem'
import { ButtonBig } from './ButtonBig'
import { Link, useLocation } from 'react-router-dom'
import iconHome from '../assets/icons/home.svg'
import iconMessages from '../assets/icons/messages.svg'
import iconNotifications from '../assets/icons/notifications.svg'
import iconSettings from '../assets/icons/settings.svg'
import logo from '../assets/logo.svg'
import '../stylesheets/left.scss'
import '../stylesheets/buttons.scss'

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
          <NavBarItem icon={iconMessages} text='Mensajes' to='/chat' />
          <NavBarItem icon={iconNotifications} text='Notificaciones' to='/notificaciones' />
          <NavBarItem icon={iconSettings} text='Ajustes' to='/ajustes' />
          <ButtonBig text='Crear Post' />
        </nav>
      </div>
    </aside>
  )
}

export default NavBar
