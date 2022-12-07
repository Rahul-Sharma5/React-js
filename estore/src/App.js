import logo from './logo.svg';
import './App.css';
import Navbars from './components/Navbar/Navbars';
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";




//fonts
import "./fonts/SpoofTrial-Regular.otf";

function App() {
  return (
    <>
    <div className="App">
      <Navbars/>
      <Header/>
      <Body/>
      <Contact/>
      <Footer/>
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
    </>
  );
}

export default App;
