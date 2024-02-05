// components
import Home from "./Pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";

const App = () => {

  return (
    <main className="p-5 bg-black h-screen font-inter">
      <Navbar/>
      <Home/>
    </main>
  );
}

export default App;
