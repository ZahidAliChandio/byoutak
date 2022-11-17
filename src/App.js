import Navbar from "./components/Navbar/Navbar";
import RightAngle from "./components/UI/RightAngle";
import Footer from "./components/Footer/Footer";
import Router from "./routes";
import Meeting from "./pages/Meeting/Meeting";

const App = () => {
  return (
    <div className="relative w-full h-screen bg-[#1F1C1C]">
      <header>
        <Navbar />
      </header>
      <main>
        {/* <RightAngle />
        <Router /> */}
        <Meeting/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
