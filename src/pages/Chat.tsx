import { useEffect } from 'react';
import '../stylesheets/chat.scss'
import iconSend from '../assets/icons/send.svg'
import iconAttach from '../assets/icons/attach.svg'
import users from '../mocks/users.json'
import { useParams } from 'react-router-dom';

export const Chat = () => {
  const { id } = useParams<{ id: string }>();

  const user = users.find(user => user.id === parseInt(id ?? '0'));

  useEffect(() => {
    if (!user) {
      console.error('User not found');
    } else {
      console.log('User:', user);
    }
  }, [user]);

  const send = () => {
    const input = document.getElementById('chat-input') as HTMLInputElement | null;
    if (input) {
      const message = input.value;
      input.value = '';
      console.log('Message:', message);
      const chatbox = document.getElementById('chatbox');
      const newMessage = document.createElement('div');
      newMessage.innerHTML = message;
      newMessage.classList.add('msg', 'msg-right');
      if (chatbox) {
        chatbox.appendChild(newMessage);
      } else {
        console.error('Chatbox element not found');
      }
    } else {
      console.error('Chat input element not found');
    }
  };

  useEffect(() => {
    const chatInput = document.getElementById('chat-input');
    if (chatInput) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter') send();
      };
      chatInput.addEventListener('keydown', handleKeyDown);
      return () => {
        chatInput.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      console.error('Chat input element not found');
    }
  }, []);

  return (
    <>
      <main className="content">
        <div className="container">
          <a className="name" href="profile/generic.html">
            <div className="name-content">
              <img className="name-pfp" width={48} src={new URL(`../assets/pfp/${user ? user.id : 'default1'}.jpg`, import.meta.url).href} alt='name pfp'></img>
              {user ? <div>{user.name}</div> : <div>User not found</div>}
            </div>
          </a>
          <div id="chatbox" className="chatbox"></div>
          <div className="messagebox">
            <div className="messagebox-content">
              <div className="message-send">
                <img className="icon" src={new URL('../assets/icons/attach.svg', import.meta.url).href} onClick={() => alert('Adjuntar no implementado')} alt='icon'></img>
              </div>
              <input id="chat-input" className="messagebox-input" type="text" placeholder="Escribir mensaje" />
              <div onClick={send} className="messagebox-send">
                <img className="icon" src={new URL('../assets/icons/send.svg', import.meta.url).href} alt="Ícono de enviar"></img>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Chat
