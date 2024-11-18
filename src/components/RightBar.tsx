import '../stylesheets/right.scss';
import searchIcon from '../assets/icons/search.svg';
import { useEffect } from 'react';

interface RightProps {
    content?: React.ReactNode;
}

export const Right = ({ content: contentComponent }: RightProps) => {

    useEffect(() => {
        const inputSearch = document.getElementById('input-search') as HTMLInputElement;
        const handleKeyDown = () => {
            alert("No implementado");
        };
        inputSearch.addEventListener('keydown', handleKeyDown);

        return () => {
            inputSearch.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <aside className="aside-right">
            <div className="aside-right__content">
                <header className="aside-right__header">
                    <div className="aside-right__search-bar">
                        <img src={searchIcon} alt="Buscar" className="aside-right__search-icon" />
                        <input type="text" id="input-search" placeholder="Buscar..." className="aside-right__search-input" />
                    </div>
                </header>
                
                {contentComponent}
            </div>
        </aside>
    )
}

export default Right
