
import Homepage from "./homepage";
import Singleproduct from "./singleproduct";
import slider from "./slider";
import Slider from "./slider";

import Contextkk from "./context/context";
import { Routes, Route } from "react-router-dom";





function App() {


  




      

   
 

  return (
    <div className="main">
      <Contextkk>
      <Routes>
      <Route path="/" element ={<Homepage/>} />
      <Route path = "/description" element = {<Singleproduct />}/>
      </Routes>  
    
      </Contextkk>
 
    
   
   
   </div>
  
  );
}

export default App;
