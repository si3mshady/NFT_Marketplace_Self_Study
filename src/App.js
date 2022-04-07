import NavBar from './components/Navbar/Navbar'
import SideBar from './components/SideBar/Sidebar'
import MainContent from './components/MainContent/MainContent'
import NewMarketItem from './components/NewMarketItem/NewMarketItem'
import MyAppts from './components/MyAppts/MyAppts'
import './App.css';

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <NavBar />
    <div className='container'> 
    <SideBar />
    <Routes> 
      <Route path="/available" element={ <NewMarketItem/>} />     
      <Route path="/mine" element={ <MyAppts/>} />              
      <Route path="/" element={ <MainContent/>} />    
    </Routes>
    </div>
    </>
  );
}

export default App;


//todo - make
