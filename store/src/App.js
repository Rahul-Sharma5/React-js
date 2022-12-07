import './App.css';
import Navigation from './components/Navigation/Nav';
import Headers from './components/Headers/Header';
import Body from './components/Body/Body';
import Footer from './components/Footers/Footer';
import Card from './Pages/Card/Card';
import Contact from './Pages/Contactus/Contact';
import Service from './Pages/Services/Service';
import Login from './Pages/Login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import { Outlet } from 'react-router-dom'





function App() {
  return (
    <div className="App">

      <BrowserRouter>

    <Routes>
          <Route exact path='/login' element={<Login />}></Route>
        </Routes> 
       

        <Routes>
          <Route exact path='/' element={<Navigation />}>
          <Route path='/cart' element={<Card/>}></Route>
          <Route path='/services' element={<Service/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>

            <Route path='/' element={<Headers />}>
            <Route path='/' element={<Body />}></Route>
            </Route>
          </Route>
         
        </Routes>





      </BrowserRouter>

      {/* 
      
       */}


      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>*/}
    </div>
  );
}

export default App;
