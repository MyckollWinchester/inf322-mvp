import { NavBarItem } from './NavBarItem'
import { ButtonBig } from './ButtonBig'
import { Link } from 'react-router-dom'
import iconHome from '../assets/icons/home.svg'
import iconMessages from '../assets/icons/messages.svg'
import iconNotifications from '../assets/icons/notifications.svg'
import iconSettings from '../assets/icons/settings.svg'
import logo from '../assets/logo.svg'
import '../stylesheets/navbar.scss'
import '../stylesheets/buttons.scss'


export const NavBar = () => {
  // const navLinkClass = ({ isActive }: { isActive: boolean }) => {
  //   const classes = ['nav-bar__link']
  //   if (isActive) classes.push('nav-bar__link--active')
  //   return classes.join(' ')
  // }
  return (
    <nav className='navbar'>
      <div className="aside-left__logo">
        <Link className='aside-left__logo-container' to='/'>
          <img className='aside-left__logo-image' src={logo} alt="" />
          <div className="aside-left__logo-text">HelpMyHome</div>
        </Link>
      </div>

      <NavBarItem icon={iconHome} text='Inicio' to='/' />
      <NavBarItem icon={iconMessages} text='Mensajes' to='/' />
      <NavBarItem icon={iconNotifications} text='Notificaciones' to='/' />
      <NavBarItem icon={iconSettings} text='Ajustes' to='/' />
      <ButtonBig text='Crear Post' />
    </nav>
  )
}

export default NavBar
