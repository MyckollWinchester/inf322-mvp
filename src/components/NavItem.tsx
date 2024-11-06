import { Link, useLocation } from 'react-router-dom';

export function NavBarItem({ icon, text, to }: { icon: string, text: string, to: string }) {
    const location = useLocation();
    const isActive = location.pathname === to;
    const altText = 'Ícono de ' + text.toLowerCase();

    return (
        <Link className={`navbar__item ${isActive ? 'navbar__item--active' : ''}`} to={to}>
            <div className="navbar__item-container">
                <img className='navbar__icon' src={icon} alt={altText}></img>
                <span className='navbar__text'>{text}</span>
            </div>
        </Link>
    );
}
