import Home from './Components/FunctionalComponents/home';
import About from './Components/FunctionalComponents/about';
import Contact from './Components/FunctionalComponents/contact';
import Gallery from './Components/FunctionalComponents/gallery';
import NavBar1 from './Components/FunctionalComponents/navbar1';
import Footer from './Components/FunctionalComponents/footer';
import UseEffect from './Components/FunctionalComponents/useeffect';
import UseEffect1 from './Components/FunctionalComponents/useeffect1';
import UseRef from './Components/FunctionalComponents/useref'; 
import UseContext from './Components/FunctionalComponents/usecontext';
import UseRef1 from './Components/FunctionalComponents/useref1';
import Image from './Components/FunctionalComponents/image';
import UseMemo from './Components/FunctionalComponents/usememo';
import Mongodb from './Components/FunctionalComponents/mongodb';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
console.log(Home)
function Page() {
    return (
          <div>
             <BrowserRouter>
             <NavBar1></NavBar1>
              <Routes>
                <Route path="/" element = {<Home />}></Route>
                <Route path='/about' element={<About  Shop = "Kongu Clothings" Dis1= "50% offer on all kids dresses" Dis2="3 kurti set @ just 999." />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/gallery' element={<Gallery />}></Route>
                <Route path='/useeffect' element={<UseEffect/>}></Route>
                <Route path='/useeffect1' element={<UseEffect1/>}></Route>
                <Route path='/useref' element={<UseRef/>}></Route>
                <Route path='/usecontext' element={<UseContext/>}></Route>
                <Route path='/useref1' element={<UseRef1/>}></Route>
                <Route path='/usememo' element={<UseMemo/>}></Route>
                <Route path='/image' element={<Image/>}></Route>
                <Route path='/mongodb' element={<Mongodb/>}></Route>
                </Routes>
          <Footer></Footer>
        </BrowserRouter>
      
      </div>
  );
}

export default Page;