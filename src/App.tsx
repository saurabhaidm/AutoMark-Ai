import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Dashboard from './pages/dashboard/Dashboard'

function App() {
  

  return (
    <div>
        <BrowserRouter>
            <Routes>
               <Route path='/'  element={ <Home/>  }  />
               <Route path='/dashboard'  element={ <Dashboard/> }  />
               
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
