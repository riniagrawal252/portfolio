import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Mainnavbar from './Components/ParallaxSection/ParallaxSection';
import TrailingCursor from './Components/TrailingCursor/Trailingeffect'
import Portfolio from './Components/Portfolio/Portfolio';
import Animatedtext from './Components/Animated/Animated';
const App = () => {
  
  return (
    
    <>
    <div >
      <TrailingCursor/>
    <div >
      
    <Navbar/>
    
  <Portfolio/>
    <Animatedtext/>
    
    <Mainnavbar/>
    <Animatedtext/>
    </div>
    </div>
    
    </>
  );
};

export default App;
