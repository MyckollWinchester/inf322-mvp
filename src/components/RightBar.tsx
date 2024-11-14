import '../stylesheets/right.scss';
import searchIcon from '../assets/icons/search.svg';

interface RightProps {
    content?: React.ReactNode;
}

export const Right = ({ content: contentComponent }: RightProps) => {
    return (
        <aside className="aside-right">
            <div className="aside-right__content">
                <header className="aside-right__header">
                    <div className="aside-right__search-bar">
                        <img src={searchIcon} alt="Buscar" className="aside-right__search-icon" />
                        <input type="text" placeholder="Buscar..." className="aside-right__search-input" />
                    </div>
                </header>
                
                {contentComponent}
            </div>
        </aside>
    )
}

export default Right
