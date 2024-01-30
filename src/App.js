import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Pages/Home/Home.jsx'
import About from './Pages/About/About.jsx'
import Projects from './Pages/Projects/Project.jsx'
import Skills from './Pages/Skills/Skills.jsx'
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import Contact from './Pages/Contact/Contact.jsx'
import Transition from './Components/Transition/Transition.js';
import TopLeftImg from "./Components/Topimage/TopLeftImg.js";
import AssignmentField from "./Components/AssignmentField/AssignmentField.jsx";
import WebField from "./Components/WebField/webField.jsx";
import OtherField from "./Components/OtherField/OtherField.jsx"



function App() {
  
  return (
    <div>
    <BrowserRouter>
    
      <Sidebar />
      <TopLeftImg/>
      
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home />
              <Transition />
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div>
              <About />
              <Transition />
            </div>
          }
        />
        <Route
          path="/projects"
          element={
            <div>
              <Projects />
              <Transition />
            </div>
          }
        />
        <Route
          path="/skills"
          element={
            <div>
              <Skills />
              <Transition />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div>
              <Contact />
              <Transition />
            </div>
          }
        />
      </Routes> 

      {/* project routing */}
      
        <Routes>
          <Route
              path="/assignment"
              element={
                <div>
                  <AssignmentField />  
                </div>
              }
            />

          <Route
              path="/web"
              element={
                <div>
                  <WebField />  
                </div>
              }
            />

          <Route
              path="/other"
              element={
                <div>
                  <OtherField />  
                </div>
              }
            />
        </Routes>
    </BrowserRouter>
  </div>

  );
}

export default App;
