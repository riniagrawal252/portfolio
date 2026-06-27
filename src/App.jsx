<<<<<<< HEAD
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Mainnavbar from "./Components/ParallaxSection/ParallaxSection";
import Portfolio from "./Components/Portfolio/Portfolio";
import BrushCursorPainter from "./Components/TrailingCursor/BrushCursorPainter";

=======
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Mainnavbar from './Components/ParallaxSection/ParallaxSection';
import TrailingCursor from './Components/TrailingCursor/Trailingeffect'

>>>>>>> d2872ed9148da927a9dc44f718ce503e2ee20e8c
const App = () => {
  return (
    <>
      <BrushCursorPainter />
      <div>
        <Navbar />
        <div> <Portfolio /></div>
       <div>
        <Mainnavbar />
        </div>
      </div>
    </>
  );
};

export default App;
