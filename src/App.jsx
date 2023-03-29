import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'
import Login from './Components/Login'
import Logout from './Components/Logout'
import Createemployee from './Components/Createemployee'
import Employeelist from './Components/Employeelist'
import Editemployee from './Components/Editemployee'
import { useState } from 'react'

const App = () => {
let[name,setName]=useState()
const handleName=(username)=>{setName(username)}
  return (
    <div>
        <BrowserRouter>
            <Home/>
            <Routes>
                <Route element={<Login handleName={handleName}/>} path="/L" />
                <Route element={<Dashboard name={name}/>} path="/D" />
                <Route element={<Home/>} path="/H" />
                <Route element={<Createemployee/>} path="/E"/>
                <Route element={<Employeelist name={name}/>} path="/EL"/>
                <Route element={<Editemployee/>} path="/EE/:data"/>
                <Route element={<Logout/>} path="/LO"/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App