import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import DropdownPage from "./components/UI/DropdownPage";

const App = () => {
  const linksPage1 = {
    id: 1,
    title: "FIND YOUR NEW HOME",
    subtitle: "Don't know what you are looking for?",
    input: true,
    links: ["RESIDENTIAL", "COMMERCIAL", "ADMIN"],
  };
  const linksPage2 = {
    id: 2,
    title: "WHERE WOULD YOUR PROPERTY BY?",
    links: ["NEW CAIRO", "6TH OF OCTOBER", "NEW CAPITAL"],
  };
  const linksPage3 = {
    id: 3,
    title: "WHAT IS THE TYPE OF UNIT YOU ARE LOOKING FOR?",
    links: ["APARTMENT", "STAND ALONE VILLA", "TOWN HOUSE", "TIWN HOUSE"],
  };
  const linksPage4 = {
    id: 4,
    title: "WHAT IS THE PRICE RANGE YOU HAVE IN MIND",
    links: ["3 Million", "4Million", "5 Million"],
  };
  return (
    <div className="relative w-full h-screen bg-[#1F1C1C]">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <DropdownPage item={linksPage1} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
