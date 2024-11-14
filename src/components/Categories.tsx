import gardeningIcon from '../assets/icons/categories/flower.svg';
import plumbingIcon from '../assets/icons/categories/water.svg';
import electricityIcon from '../assets/icons/categories/thunder.svg';
import Category from './SimpleNavItem';

export const Categories = () => {
    return (
        <div className="aside-right__categories">
             <div className='aside-right__categories-title'>Categorías</div>
            <Category text='Jardinería' icon={gardeningIcon} />
            <Category text='Fontanería' icon={plumbingIcon} />
            <Category text='Electricidad' icon={electricityIcon} />
            <button className='aside-right__categories-more' onClick={() => alert('No implementado')}>Ver más...</button>
        </div>
    );
}

export default Categories;