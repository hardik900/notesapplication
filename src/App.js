import "./App.css"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Courses from "./component/Courses";
import Notes from "./component/Notes";
import Nav from "./component/Navbar/Nav";

function App() {
  let obj = {display:'flex'}
  return (
    <>
    <BrowserRouter>
    
        {/* <Nav /> */}
      <Routes>
        {/* <Route path="/" element={<Nav />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/home/:course" element={<Home />}/> */}

        <Route path="/" element={<Nav />} />
        <Route path="/course" element={<Courses />}/>
        {/* <Route path="/course" element={<Home />}/> */}
        <Route path="/course/:course" element={<Courses />}/>
      </Routes>
    </BrowserRouter>
 
    </>
  );
}

export default App;





