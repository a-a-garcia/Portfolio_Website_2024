import "./App.css";
import Nav from "./Components/Nav";
import { HashRouter, Routes, Route } from "react-router-dom";
import LandingText from "./Components/LandingText";
import ProjectsPage from "./Components/ProjectsPage";
import AboutMePage from "./Components/AboutMePage";
import ContactMe from "./Components/ContactMe";

function App() {
  return (
    <div className="page-container mx-10 max-h-100">
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<LandingText />}></Route>
          <Route path="/projects" element={<ProjectsPage />}></Route>
          <Route path="#/about-me" element={<AboutMePage/>}></Route>
          <Route path="#/contact" element={<ContactMe />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
