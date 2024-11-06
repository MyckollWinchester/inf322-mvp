import { Notification } from "../components/Notification";
import '../stylesheets/notification.scss'
export const Notifications = () => {
  return (
    <>
      <main className="content">
        <div className="container">
          <div className="header-not notification">Notificaciones</div>
          <Notification title='QUE' text='soi una notificasion!!!!!111!!!!' />
          <Notification title='Mensaje recibido' text='hola, quisiera consultar por tus servisios aver q tal' />
          <Notification title='Mensaje recibido' text='Bienvenido a HelpMyHome! no olvideis suscribiros y darle a la campanita like, un besaso adios' />
        </div>

      </main>
    </>
  );
}

export default Notifications