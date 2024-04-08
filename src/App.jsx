
import './App.css'
import About from './Components/About/About'
import Github from './Components/About/Github'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Scrolltotop from './Components/ScrollToTop/Scrolltotop'
import "aos/dist/aos.css";
import { ThemeContext } from './Context/Theme'
import React from "react";
import Aos from "aos";
import Projects from './Components/Projects/Projects'

function App() {

  const [{ themename }] = React.useContext(ThemeContext);
  React.useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div id="top" className={`${themename} app`}>
    <section id="#home">
      <Header />
    </section>
    <main>
      <About />
      <Github />
      <section id="#projects">
        <Projects />
      </section>
      <section id="#contact">
        <Contact />
      </section>
    </main>
    <Footer />
    <Scrolltotop />
  </div>
  )
}

export default App
