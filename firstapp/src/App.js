import './App.css';
import Actionbtn from "./components/Actionbtn"
import Body from "./components/Body"
import Header from "./components/Header/Header"
import {Routes,Route} from "react-router-dom"
import Posts from './components/Posts';
import Description from './components/Description'

function App() {
  return (
  <>           
   <Header></Header>
    <Routes>   
    <Route exact path='/' element={
     <>
      <Body ></Body>
      <Actionbtn></Actionbtn>
     </>
    }></Route>

   <Route exact path='/posttitle' element={
     <>
      <Posts/>
     </>
    }></Route>

    <Route exact path='/description' element={
     <>
      <Description/>      
     </>
    }></Route>
    </Routes>  
  </>    
           
  );
}

export default App;
