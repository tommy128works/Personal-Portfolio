import "./App.css";
import NavigationHeader from "./NavigationHeader";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ContactMe from "./ContactMe";

function App() {
  return (
    <div className="App">
      <NavigationHeader>{/* Insert NavigationLinks here */}</NavigationHeader>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <ContactMe></ContactMe>
    </div>
  );
}

export default App;
