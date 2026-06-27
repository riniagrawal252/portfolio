import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Mainnavbar from "./Components/ParallaxSection/ParallaxSection";
import Portfolio from "./Components/Portfolio/Portfolio";
import BrushCursorPainter from "./Components/TrailingCursor/BrushCursorPainter";


const App = () => {
  return (
    <>
      <BrushCursorPainter />
      <div>
      
        <Navbar />
  

        <Portfolio />
              

        <Mainnavbar />
              
</div>
      
    </>
  );
};

export default App;