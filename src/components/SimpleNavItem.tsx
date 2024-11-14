interface CategoryProps {
    text: string;
    icon: string;
}

export function Category({text, icon}: CategoryProps) {
    const altText = 'Ícono de ' + text.toLowerCase();

    return (
        <button className="navbar__item-container aside-right__categories-item" onClick={() => alert('Seleccionar categorias no implementado')}> 
            <img className='navbar__icon aside-right__categories-icon' src={icon} alt={altText}></img>
            <span className='navbar__text'>{text}</span>
        </button>
    );
}

export default Category;