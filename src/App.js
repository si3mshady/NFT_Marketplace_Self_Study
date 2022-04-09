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
      <Route path="/new" element={ <NewMarketItem/>} />     
      <Route path="/scheduled" element={ <MyAppts/>} />              
      <Route path="/available" element={ <MainContent/>} />    
    </Routes>
    </div>
    </>
  );
}

export default App;


//todo - make
