// components
import Home from "./Pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

const App = () => {

  return (
    <main className="p-8 bg-black min-h-screen font-inter scroll-smooth">
      <Navbar/>
      <Home/>
      <Footer/>
    </main>
  );
}

export default App;
