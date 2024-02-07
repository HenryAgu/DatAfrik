// components
import Home from "./Pages/Home/Home";
import About from "./Pages/Home/components/About/About";
import Contact from "./Pages/Home/components/Contact/Contact";
import Sponsors from "./Pages/Home/components/Sponsors/Sponsors";
import Navbar from "./components/Navbar/Navbar";

const App = () => {

  return (
    <main className="p-5 bg-black min-h-screen font-inter">
      <Navbar/>
      <Home/>
      <Sponsors/>
      <About/>
      <Contact/>
    </main>
  );
}

export default App;
