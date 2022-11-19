import Navbar from "./components/Navbar/Navbar";
import RightAngle from "./components/UI/RightAngle";
import Footer from "./components/Footer/Footer";
import Router from "./routes";


const App = () => {
  return (
    <div>
      <header>
        {/* <Navbar /> */}
      </header>
      <main>
        {/* <RightAngle /> */}
        <Router />        
        
      </main>
      <Footer />      
    </div>
  );
};

export default App;
