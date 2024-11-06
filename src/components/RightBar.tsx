import '../stylesheets/right.scss';
import defaultPfp from '../assets/pfp/default1.webp';
export const Right = () => {
    return (
        <aside className="aside-right">
            <div className="aside-right__content">
                <div className="aside-right__header" onClick={() => alert('Mi perfil no implementado')}>
                    <img src={defaultPfp} className="aside-right__profile-photo" alt='Perfil'></img>
                    Mi perfil
                </div>
            </div>
        </aside>
    )
}

export default Right
