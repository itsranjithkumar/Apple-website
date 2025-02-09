import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";


const App = () => {
    return (
      <div className="bg-black text-white min-h-screen">
        <main className=" bg-black">
          <Navbar />
          <Hero />
          <Highlights />
        </main>
      </div>
    );
};
export default App;