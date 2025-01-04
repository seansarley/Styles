import Home from './pages/Home';
import Stylists from './pages/Stylists';
import Services from './pages/Services';
import Navbar from './pages/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/Stylists" element = {<Stylists/>}/>
      <Route path = "/Services" element = {<Services/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
