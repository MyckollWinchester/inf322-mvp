import { Link } from 'react-router-dom';


export function NavBarItem({ icon, text, to }: { icon: string, text: string, to: string }) {
    return (
        <Link className='navbar__item' to={to}>
            <div className="navbar__item-container">
                <img className='navbar__icon' src={icon}></img>
                <span className='navbar__text'>{text}</span>
            </div>
        </Link>
    )
}

