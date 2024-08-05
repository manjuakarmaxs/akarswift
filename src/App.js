import React from 'react';
import Header from './component/Header';
import Home from './component/Home';
import About from './component/About';
import Service from './component/Service';
import Products from './component/Product';
import GlobalNetwork from './component/Global';
import Sustainability from './component/Sustainability';
import Careers from './component/Careers';
import Contact from './component/ContactUs';
import Footer from './component/Footer'
import ScrollTopButton from './component/ScrollTopButton';
const App = () => {
  return (
    <div>
      <Header />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="service"><Service /></div>
      <div id="products"><Products /></div>
      <div id="global-network"><GlobalNetwork /></div>
      <div id="sustainability"><Sustainability /></div>
      <div id="careers"><Careers /></div>
      <div id="contact"><Contact /></div>
      <div id="Footer"><Footer /></div>
      <div><ScrollTopButton/></div>
    </div>
  );
};

export default App;
