import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Child from './pages/Child';
import ChildDetails from './pages/ChildDetails';
import SpecificDetail from './pages/SpecificDetail';
import Errors from './pages/Error';


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />     
        <Route path='/product' element={<Product />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:id' element={<Child />} />
        <Route path='/product/:id/details' element={<ChildDetails />} />
        <Route path='/product/:id/details/:specific' element={<SpecificDetail />}/>
        <Route path='/*' element={<Errors />} />
      </Routes>

    </div>
  )
}

export default App