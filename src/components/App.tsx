import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/home_page'
import NavBar from './nav_bar'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='app'>
          <NavBar />
          <div className='layout__page'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              {/* <Route path='/lightbulb' element={<LightbulbPage />} /> */}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
