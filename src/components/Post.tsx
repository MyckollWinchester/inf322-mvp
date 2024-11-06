import iconPinpoint from '../assets/icons/pinpoint.svg';
import iconSendMessage from '../assets/icons/post-send.svg';
import { Link } from 'react-router-dom';

export default function Post({ post_id, author, /*author_handler,*/ avatar, time, location, content, image }: { post_id: number, author: string, author_handler: string, avatar: string, time: string, location: string, content: string, image?: string }) {
    const pfpPath = "/src/assets/pfp/" + avatar;
    const imagePath = "/src/assets/post/" + image;
    return (
        <section className="post">
            <header className="post__header post__header--offering">
                <Link to={`/profile/${post_id}`} className="post__pfp-container">
                    <img src={pfpPath} className="post__pfp" alt='pfp'/>
                </Link>
                <div className="post__data">
                    <div className="post__data-row1">
                        <a href={`/profile/${post_id}`} className="post__name">{author}</a>
                        <div className="post__time">· {time}</div>
                    </div>
                    <div className="post__data-row2">
                        <div className="post__location">
                            <img src={iconPinpoint} className="inline-svg" alt='pinpoint'/>
                            <span>{location}</span>
                        </div>
                    </div>
                </div>
            </header>
            {image && (
                <div className="post__image-container">
                    <img src={imagePath} className="post__image" alt='path' />
                </div>
            )}
            <div className="post__content">
                {content}
            </div>
            
            <Link to="/chat" className="post__send-message"><img className='inline-svg' src={iconSendMessage} alt='Ícono de enviar' style={{ marginRight: 4}}></img>Contactar</Link>
        </section>
    )
}
