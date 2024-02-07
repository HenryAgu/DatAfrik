// components
import Home from "./Pages/Home/Home";
import Sponsors from "./Pages/Home/components/Sponsors/Sponsors";
import Navbar from "./components/Navbar/Navbar";

const App = () => {

  return (
    <main className="p-5 bg-black min-h-screen font-inter">
      <Navbar/>
      <Home/>
      <Sponsors/>
    </main>
  );
}

export default App;
