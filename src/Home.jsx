import React from 'react';
import Header from './Header';
import HowDoesItWork from './HowDoesItWork';
import About from './About';
import Services from './Services';
import ContactUs from './ContactUs';

const Home = () => {
  return (
    <>
        <Header />
        <HowDoesItWork />
        <About />
        <Services />
        <ContactUs />
    </>
  )
}

export default Home;