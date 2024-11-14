import '../stylesheets/right.scss';
import defaultPfp from '../assets/pfp/default1.webp';
import Categories from './Categories';

interface RightProps {
    content?: React.ReactNode;
}

export const Right = ({ content: contentComponent }: RightProps) => {
    return (
        <aside className="aside-right">
            <div className="aside-right__content">
                <header className="aside-right__header" onClick={() => alert('Mi perfil no implementado')}>
                    <img src={defaultPfp} className="aside-right__profile-photo" alt='Perfil'></img>
                    Mi perfil
                </header>
                <Categories />
                {contentComponent}
            </div>
        </aside>
    )
}

export default Right
