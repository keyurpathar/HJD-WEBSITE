
import Header from './components/User/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/User/Home'

const App = () => {
  return (
    <div className='px-8 py-3'>
      <Header />
      
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

    </div>
  )
}

export default App
