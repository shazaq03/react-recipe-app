import React from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

//import components
import Home from './Home'
import Cuisine from './Cuisine';
import SearchResults from './SearchResults';
import Recipe from './Recipe';

function Pages() {

  const location = useLocation();

  return (
    <AnimatePresence mode='wait' >
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home/>}/>
          <Route path='/cuisine/:type' element={<Cuisine/>}/>
          <Route path='/search/:searchterm' element={<SearchResults/>}/>
          <Route path='/recipe/:id' element={<Recipe/>}/>
        </Routes>
    </AnimatePresence>
   
  )
}

export default Pages;