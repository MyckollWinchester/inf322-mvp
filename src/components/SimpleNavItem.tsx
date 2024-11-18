import { Link } from 'react-router-dom';

interface CategoryProps {
    text: string;
    icon: string;
}

export function Category({text, icon}: CategoryProps) {
    const altText = 'Ícono de ' + text.toLowerCase();
    const categoryPath = '/categoria/' + text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    return (
        <Link to={categoryPath} className={`navbar__item-container aside-right__categories-item`}> 
            <img className='navbar__icon aside-right__categories-icon' src={icon} alt={altText}></img>
            <span className='navbar__text'>{text}</span>
        </Link>
    );
}

export default Category;