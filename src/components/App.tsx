import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/homePage'
import NavBar from './MainHeader'

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
