import Home from './Home';
import Stylists from './Stylists';
import Services from './Services';
import Book from './Book';
import Navbar from './Navbar';
import {BrowserRouter,Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/Stylists" element = {<Stylists/>}/>
      <Route path = "/Services" element = {<Services/>}/>
      <Route path = "/Book" element = {<Book/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
