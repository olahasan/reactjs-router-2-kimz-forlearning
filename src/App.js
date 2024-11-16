import './App.css';


import Header from './Components/Header';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';



function App() {
  return (
    <div className="App">
     <Header />
     <h1>gsdgfdkjsfskfgskdgfks</h1>
     <div className="main"><Outlet/></div>
     <Footer />
    </div>
  );
}

export default App;
