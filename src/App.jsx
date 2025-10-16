import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./components/About";
import Projects from "./components/Projects";
// import Contact from "./components/Contact";
import { ThemeProvider } from "./context/ContextApi";
import { Element } from "react-scroll";

function App() {
  return (
    <ThemeProvider>
      <Header />

      {/* Scrollable Sections */}
      <Element name="home">
        <Home />
      </Element>
    </ThemeProvider>
  );
}

export default App;
