import Navbar from "./components/navbar/Navbar"
import Intro from './components/intro/Intro'
import Aboutus from './components/aboutus/Aboutus'
import Courses from './components/courses/Courses'
import Contact from "./components/contact/Contact"
import Team from "./components/ourteam/Team"
import Eventreg from "./components/event_registeration/event_registeration"
import Regpool from "./components/regpool/regpool"
//import Testimonials from "./components/testimonials/Testimonials"

import "./app.scss"

function App() {
  
  return (
    <div className="app">
    <Navbar/>
      <div className="sections">
        <Intro/>
        <Aboutus/>
        <div className="services">
          <Courses/>
         </div> 
          <Eventreg/>
          <Regpool/>
        <Team/>
        {/*<Testimonials/>*/}
        <Contact/>
      </div>  
    </div>
  );
}

export default App;
