import flower from '../assets/icons/categories/flower.svg';
import water from '../assets/icons/categories/water.svg';
import thunder from '../assets/icons/categories/thunder.svg';
import Category from './SimpleNavItem';

// interface CategoryProps {
//     text: string;

// }

export const Categories = () => {

    return (
        <div className="aside-right__categories">
             <div className='aside-right__categories-title'>Categorias</div>
            <Category text='Jardineria' icon={flower} />
            <Category text='Fontaneria' icon={water} />
            <Category text='Electricidad' icon={thunder} />
            <button className='aside-right__categories-more' onClick={() => alert('Ver mas no implementado')}>
                Ver más...
            </button>
        </div>

    );
}

export default Categories;