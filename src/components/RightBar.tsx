import '../stylesheets/right.scss';
import defaultPfp from '../assets/pfp/default1.webp';

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
                {contentComponent}
            </div>
        </aside>
    )
}

export default Right
