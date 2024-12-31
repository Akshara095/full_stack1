import './App.css'
//import Funcomp from './Components/FunctionalComponents/funccomp';
import Home from './Components/FunctionalComponents/home';
import About from './Components/FunctionalComponents/about';
import Contact from './Components/FunctionalComponents/contact';
import Gallery from './Components/FunctionalComponents/gallery';
import NavBar from './Components/FunctionalComponents/navbar';
import Footer from './Components/FunctionalComponents/footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';




function App() {
return (
      <div>
         <BrowserRouter>
         <NavBar></NavBar>
          <Routes>
            <Route path="/" element = {<Home />}></Route>
            <Route path='/about' element={<About  Shop = "Kongu Clothings" Dis1= "50% offer on all kids dresses" Dis2="3 kurti set @ just 999." />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/gallery' element={<Gallery />}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      
      </div>
  );
}

export default App;