import dot from '../assets/icons/dot.svg';

export const Notification = ({ title, text }: {title: string, text: string }) => { 

    return (
        <div className="notification" onClick={() => alert('Función no implementada')}>
            <div className="notification__title">
                <img src={dot} alt="Dot" />
                {title}
            </div>   
            <div className="notification__text">{text}</div>
        </div>

    )
  
}