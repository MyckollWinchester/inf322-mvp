import { Notification } from "../components/Notification";
import '../stylesheets/notification.scss'
export const Notifications = () => {
  return (
    <>
      <main className="content">
        <div className="container">
          <div className="header-not notification">Notificaciones</div>
          <Notification title='Javier ha comenzado a seguirte' text='Hace 2 horas' />
          <Notification title='Mensaje recibido' text='Juan: ¿Qué días estás disponible?' />
          <Notification title='Mensaje recibido' text='María: Hola, quisiera consultar por tus servicios.' />
          <Notification title='Sistema' text='Bienvenido a HelpMyHome!' />
        </div>

      </main>
    </>
  );
}

export default Notifications