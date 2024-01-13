import "./App.css";
import Nav from "./Components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingText from "./Components/LandingText";

function App() {
  return (
    <div className="page-container m-20">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingText />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
