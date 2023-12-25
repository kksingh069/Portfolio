import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import  Footer  from "./Components/Footer";
import  Navbar  from "./Components/Navbar";
import About from "./Pages/About";
 import Contact from "./Pages/Contact";
 import  Projects from "./pages/Projects";
 import  Home from "./Pages/Home";
const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;