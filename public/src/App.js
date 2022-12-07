import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import BodyImage from './components/BodyImage';
import Catergory from './components/Catergory';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <BodyImage></BodyImage>
      <Catergory></Catergory>
      <Footer></Footer>
    </div>
  );
}

export default App;
