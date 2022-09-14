import About from "./components/About/About";
import Home from "./components/Home/Home";
import Property from "./components/Property/Property";
import Agent from "./components/Agent/Agent";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import RegisterAgent from "./components/Templates/RegisterAgent";
import { Routes, Route } from "react-router-dom";
import Error from "./components/Error/Error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="property" element={<Property />} />
      <Route path="agent" element={<Agent />} />
      <Route path="contact" element={<Contact />} />
      <Route path="blog" element={<Blog />} />
      <Route path="UserForm" element={<RegisterAgent />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
