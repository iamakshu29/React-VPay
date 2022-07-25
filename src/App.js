import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './About'
import Home from './Home';
import Services from './Services'
import ContactUs from './ContactUs';
import Error from './Error';
import MainHeader from './MainHeader';


const App = () => {
  return (
    <>
      <Routes>
        <Route path='' element={<MainHeader />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='service' element={<Services />} />
          <Route path='contact' element={<ContactUs />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;