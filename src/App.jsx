import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Expression from "./Expression"
// import Greet from './Greetings/Greet'
// import GreetHello from './Greetings/GreetHello'
// import Homepage from './Conditionals/Homepage'
// import LoginForm from './Dashboard/LoginForm'
// import Dashboard from './Dashboard/Dashboard'
// import AuthError from './Dashboard/AuthError'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ContactUs from './components/ContactUs'
import MyHome from './components/MyHome'
import MyProfile from './components/MyProfile'
import Nav from '../src/components/Nav'

import MyMainForms from './MyMainForms/MyMainForms'
import BasicForm from './MyMainForms/BasicForms'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Nav/>
        <div className="">
          <Routes>
            <Route path="/" element={<MyHome/>}/>
            <Route path="/profile" element={<MyProfile/>}/>
            <Route path="/contact" element={<ContactUs/>}/>
            <Route path="/mymainforms/*" element={<MyMainForms/>} />
            <Route path="*" element={<h2>404 Not Found</h2>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App
