
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Log In/Login'
import Signup from './pages/Sign Up/Signup'
import ResetPw from './pages/ResetPw/ResetPw'
import Home from './pages/Home/Home'

function App() {

  return (
    <>
      
      <Router>

           <Routes>
             <Route path='/' element={<Signup/>} />
             <Route path='/login' element={<Login/>}/>
             <Route path='/resetpassword' element={<ResetPw/>}/>
             <Route path='/home' element={<Home/>}/>
           </Routes>

      </Router>

      <Signup/>
      <Login/>
    </>
  )
}

export default App
