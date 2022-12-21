// import React from 'react'
// import "./index.css";
// import './App.css';
// // import Users from './components/User'
// // import Admin from './components/Admin';


// // import CheckBox from './components/CheckBox';
// // import Home from './components/home';
// // import header from './components/header';
// // import logo from './components/logo'
//  import Navbar from './components/Navbar';
// import RouterApp from './components/RouterApp'


// function App() {
//   return(

// <div>
  
  
 

//   <RouterApp/>


// </div>
    
  
//   );

// }

// export default App;


import Navbar from "./components/Navbar"
import User from "./components/user/User"
import Home from "./components/home"
import Admin from "./components/Admin"
import CheckBox from './components/CheckBox'
import { Route, Routes } from "react-router-dom"
import AppTest from "./components/AppTest/AppTest"





function App() {

    

  return (
    <>
      <Navbar />
      <div className="container">
      <Routes>
       <Route path='/home' element={<Home/>}/>
       <Route path='/User' element={<User/>}/>
        <Route path='/Admin' element={<Admin/>}/>
        <Route path='/CheckBox' element={<CheckBox/>}/>
        <Route path="/" element={<AppTest />}/>
       
      
      
      </Routes>

      </div>
    </>
  )
}

export default App