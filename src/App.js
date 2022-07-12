import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}>
          
           
          </Route>
          <Route path = "/about" element = {<About></About>}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
