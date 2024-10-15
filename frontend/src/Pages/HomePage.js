import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../Components/NavBar';
import Hero from '../Components/Hero';
import Introduction from '../Components/Introduction';
import Features from '../Components/Features';
import Testimonials from '../Components/Testimonials';
import Footer from '../Components/Footer';

function HomePage() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Introduction/>
      <Features/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default HomePage;
