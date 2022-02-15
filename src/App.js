import React  from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";

import NameList from "./components/pages/NameList/NameList";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Footer from "./components/Footer/Footer";
import NameListC from "./components/pages/NameListC/NameListC";

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderBar/>
          <Routes>
            <Route path="Random-User-Generator-React/" element={<Home />} />
            <Route path="Random-User-Generator-React/about" element={<About/>} />
            <Route path="Random-User-Generator-React/namelist" element={<NameList/>} />
            <Route path="Random-User-Generator-React/namelistc" element={<NameListC/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
