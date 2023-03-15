import Navbar from "../src/components/Navbar.js";
import mbsday from "../src/assets/mbsday.jpg"
import mbsphone from "../src/assets/mbsphone.jpg"
import Home from "../src/components/Home.js";
function App() {
  return (
    <div className="h-screen relative">
      {/*MBS PHONE*/}
      <div className="flex md:hidden">
    <div className=" absolute flex w-full h-full ">
    <img 
     src={mbsphone} 
     alt=""
     className=" object-cover w-full h-full "
    />
    </div>
</div>
{/* WEB MBS */} 
<div className="hidden  md:flex">
    <div className=" absolute flex w-full h-full ">
    <img 
     src={mbsday} 
     alt=""
     className=" object-cover w-full h-full "
     />
  </div>
</div>
   <Navbar /> 
   <Home /> 
    </div>
  );
}

export default App;
