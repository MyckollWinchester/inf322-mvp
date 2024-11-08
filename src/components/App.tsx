import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Sidebar.tsx'
import Right from './RightBar.tsx'
import Chat from '../pages/Chat.tsx'
import Feed from '../pages/Feed.tsx'
import FeedHelp from '../pages/FeedHelp.tsx'
import Notifications from '../pages/Notifications.tsx'
import Profile from '../pages/Profile.tsx'
import Post from '../pages/Post.tsx'
import Config from '../pages/Config.tsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='app'>
          <NavBar />
          <div className='layout__page'>
            <Routes>
              <Route path='/' element={<Feed />} />
              <Route path='/chat' element={<Chat />} />
              <Route path='/help' element={<FeedHelp />} />
              <Route path='/notificaciones' element={<Notifications />} />
              <Route path='/ajustes' element={<Config />} />
              <Route path="/chat/:id" element={<Chat />} />
              <Route path="/profile/:id" element={<Profile />} />
              <Route path="/post/:id" element={<Post />} />
            </Routes>
          </div>
          <Right />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
