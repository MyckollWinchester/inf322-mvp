import { SetStateAction, useState } from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/dialog.scss';
import imageIcon from '../assets/icons/image.svg';
import defaultPfp from '../assets/pfp/default1.jpg';
import iconPinpoint from '../assets/icons/pinpoint.svg';
import { toast } from 'react-toastify';

const Dialog = ({ onClose }: { onClose: () => void }) => {
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState<File | null>(null);

    const handleDescriptionChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setDescription(e.target.value);
    };

    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setPhoto(e.target.files[0]);
        }
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        toast("Tu publicación ha sido creada", { type: 'success' });

        console.log({ description, photo });
        const postsDiv = document.getElementById('posts');

        if (postsDiv) {
            const newPost = (
                <section className="post">
                    <header className="post__header post__header--offering">
                        <a href={`/profile/666`} className="post__pfp-container">
                            <img src={defaultPfp} className="post__pfp" alt='pfp' />
                        </a>
                        <div className="post__data">
                            <div className="post__data-row1">
                                <a href={`/profile/sigma`} className="post__name">Tu Nombre</a>
                                <div className="post__time">· ahora</div>
                            </div>
                            <div className="post__data-row2">
                                <div className="post__location">
                                    <img src={iconPinpoint} className="inline-svg" alt='pinpoint' />
                                    <span>Tu ubicación</span>
                                </div>
                            </div>
                        </div>
                    </header>
                    {photo && (
                        <div className="post__image-container">
                            <img src="upsi..." className="post__image" alt='path' />
                        </div>
                    )}
                    <div className="post__content">
                        {description}
                    </div>
                </section>
            );
            console.log(newPost);
            const tempDiv = document.createElement('div');
            ReactDOM.render(newPost, tempDiv);
            postsDiv.insertBefore(tempDiv.firstChild as Node, postsDiv.children[1]);
        }

        onClose();
    };

    return (
        <div className="dialog-container">
            <div className="dialog">
                <header>
                    <button className="dialog__close" onClick={onClose}>x</button>
                    <span>Estás publicando en <span className="destacar" title="Personas que puedan resolver tu problema podrían contactarte.">Solcitudes</span>.</span>
                </header>
                <form onSubmit={handleSubmit}>
                    <div>
                        <textarea
                            value={description}
                            onChange={handleDescriptionChange}
                            placeholder="¿Qué necesitas?"
                        />
                    </div>
                    <footer>
                        <div>
                            <button className="attach-btn" type="button" onClick={() => document.getElementById('photoUpload')?.click()}>
                                <img src={imageIcon} alt="Attach" className="inline-svg" />
                                {photo ? 'Foto adjunta' : 'Adjuntar foto'}
                            </button>
                            <input
                                id="photoUpload"
                                type="file"
                                title="Choose a photo to upload"
                                onChange={handlePhotoChange}
                                style={{ display: 'none' }}
                            />

                        </div>
                        <button className="submit-btn" type="submit">Publicar</button>
                    </footer>
                </form>
            </div>
        </div>
    );
};

export default Dialog;
