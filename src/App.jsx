// components 
import Header from './components/User/Header'
import Footer from './components/User/Footer'
// routing 
import { Route, Routes } from 'react-router-dom'
// pages 
import Home from './pages/User/Home'



const App = () => {
  return (
    <div className='px-6 py-3'>
      <Header />
      
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App
