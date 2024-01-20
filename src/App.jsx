import "./App.css";
import Nav from "./Components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingText from "./Components/LandingText";
import ProjectsPage from "./Components/ProjectsPage";

function App() {
  return (
    <div className="page-container m-20 max-h-100">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<LandingText />}></Route>
          <Route path="/projects" element={<ProjectsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
