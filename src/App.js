import Navbar from "./components/Navbar/Navbar";
import RightAngle from "./components/UI/RightAngle";
import Footer from "./components/Footer/Footer";
import Router from "./routes";
import Meeting from "./pages/Meeting/Meeting";
import ContactUs from "./pages/ContactUs/ContactUs";


const App = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        {/* <RightAngle />
        <Router /> */}
        {/* <Meeting /> */}
        <ContactUs/>
      </main>
      <Footer />      
    </div>
  );
};

export default App;
