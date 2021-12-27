import NameList from "./components/pages/NameList/NameList";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";

function App() {
  return (
    <div>
      <HeaderBar/>
      <Home/>
      <About/>
      <NameList/>
    </div>
  );
}

export default App;
