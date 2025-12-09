import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Services from "./components/Services/Services"
import About from "./components/About/About"
import Design from "./components/Design/Design"
import Skills from "./components/Skills/Skills"
import BrandMarquee from "./components/BrandMarquee/BrandMarquee"
import Blog from "./components/Blog/Blog"
import Subscribe from "./components/Subscribe/Subscribe"
import Footer from "./components/Footer/Footer"
import MagicCursor from "./components/MagicCursor/MagicCursor"
import ScrollProgress from "./components/ScrollProgress/ScrollProgress"
import Preloader from "./components/Preloader/Preloader"
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./App.css"

function App() {
  return (
    <div className="App">
      <Preloader />
      <Header />
      <Hero />
      <Services />
      <About />
      <Design />
      <Skills />
      <BrandMarquee />
      <Blog />
      <Subscribe />
      <Footer />
      <MagicCursor />
      <ScrollProgress />
    </div>
  )
}

export default App
