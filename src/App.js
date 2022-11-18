import Navbar from "./components/Navbar/Navbar";
import RightAngle from "./components/UI/RightAngle";
import Footer from "./components/Footer/Footer";
import Router from "./routes";
import Meeting from "./pages/Meeting/Meeting";

const App = () => {
  return (
    <div className="relative min-h-screen">
      <header>
        <Navbar />
      </header>
      <main>
        {/* <RightAngle />
        <Router /> */}
        <Meeting />
      </main>
      <Footer />
    </div>
  );
};

export default App;
