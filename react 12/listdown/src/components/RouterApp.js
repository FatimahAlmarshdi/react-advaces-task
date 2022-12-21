import React from 'react'
import { BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import Users from './User'
import Admin from './Admin';
import CheckBox from './CheckBox';
import Home from './home';
// import header from '../components/header';
// import logo from '../components/logo'




function App() {
  return(

    <BrowserRouter>
    <div className='routee'>
                {/* <Link to='/User'> Users</Link>{" "}
                <Link to='/Admin'> Admin</Link>{" "}
                <Link to='/CheckBox'> CheckBox</Link> */}
            
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/User' element={<Users/>}/>
        <Route path='/Admin' element={<Admin/>}/>
        <Route path='/CheckBox' element={<CheckBox/>}/>
      </Routes>


    </div>
    
    </BrowserRouter>
  );

}

export default App;