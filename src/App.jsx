import React from 'react';
import HomeContent from './components/HomeContent.jsx';
import NavBar from './components/navbar.jsx';
import FeatureComponent from './components/FeatureComponent.jsx';
import WorkFlow from './components/WorkFlow.jsx';
import PricingSection from './components/PricingSection.jsx';
import Testmonial from './components/Testmonial.jsx';
import Footer from './components/Footer.jsx';


const App = () => {
  return (
    <div>
      <NavBar />
      <div className='max-w-7xl mx-auto px-20 pt-10'>
      <HomeContent />
      <FeatureComponent />
      <WorkFlow />
      <PricingSection />
      <Testmonial />
      <Footer/>
      </div>
     
      
      
    </div>
  )
}

export default App

