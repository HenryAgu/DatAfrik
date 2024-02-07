// components
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Hero from './components/Hero/Hero'
import Sponsors from './components/Sponsors/Sponsors'

const Home = () => {
  return (
    <section>
        <Hero/>
        <Sponsors/>
        <About/>
        <Contact/>
    </section>
  )
}

export default Home