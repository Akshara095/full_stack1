import Home from './home';
import About from './about';
/*import Contact from './Components/FunctionalComponents/contact';
import Gallery from './Components/FunctionalComponents/gallery';
//import NavBar1 from './Components/FunctionalComponents/navbar1';
import Footer from './Components/FunctionalComponents/footer';
import UseEffect from './Components/FunctionalComponents/useeffect';
import UseEffect1 from './Components/FunctionalComponents/useeffect1';
import UseRef from './Components/FunctionalComponents/useref'; 
import UseContext from './Components/FunctionalComponents/usecontext';
import UseRef1 from './Components/FunctionalComponents/useref1';
import Image from './Components/FunctionalComponents/image';
import UseMemo from './Components/FunctionalComponents/usememo';
import Mongodb from './Components/FunctionalComponents/mongodb';*/
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function Page() {
    return (
          <div>
             <BrowserRouter>
             <NavBar1></NavBar1>
              <Routes>
                <Route path="/home" element = {<Home />}></Route>
                <Route path='/about' element={<About  Shop = "Kongu Clothings" Dis1= "50% offer on all kids dresses" Dis2="3 kurti set @ just 999." />}></Route>
              
                </Routes>
        </BrowserRouter>
      
      </div>
  );
}

export default Page;