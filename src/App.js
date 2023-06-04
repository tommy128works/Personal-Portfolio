import "./App.css";
import NavigationHeader from "./NavigationHeader";
import AboutMe from "./AboutMe";
import ProjectGallery from "./ProjectGallery";
import ContactMe from "./ContactMe";

function App() {
  return (
    <div className="App">
      <NavigationHeader>{/* Insert NavigationLinks here */}</NavigationHeader>
      <AboutMe></AboutMe>
      <ProjectGallery></ProjectGallery>
      <ContactMe></ContactMe>
    </div>
  );
}

export default App;
