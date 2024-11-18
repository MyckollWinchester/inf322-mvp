import gardeningIcon from '../assets/icons/categories/flower.svg';
import plumbingIcon from '../assets/icons/categories/water.svg';
import electrodomesticsIcon from '../assets/icons/categories/thunder.svg';
import Category from './SimpleNavItem';

export const Categories = () => {
    return (
        <div className="aside-right__categories">
             <div className='aside-right__categories-title'>Categorías</div>
            <Category text='Jardinería' icon={gardeningIcon} />
            <Category text='Fontanería' icon={plumbingIcon} />
            <Category text='Electrodomésticos' icon={electrodomesticsIcon} />
            <button className='aside-right__categories-more' onClick={() => alert('No implementado')}>Ver más...</button>
        </div>
    );
}

export default Categories;