interface CategoryProps {
    text: string;
    icon: string;
}

export function Category({text, icon}: CategoryProps) {
    const altText = 'Ícono de ' + text.toLowerCase();

    return (
        <div className="navbar__item-container aside-right__categories-item">
            <img className='navbar__icon aside-right__categories-icon' src={icon} alt={altText}></img>
            <span className='navbar__text'>{text}</span>
        </div>
    );
}

export default Category;