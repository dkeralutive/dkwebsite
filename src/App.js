import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage/HomePage";
import Error from "./Pages/Error/Error";
import About from "./Pages/About/About";
import ArtAndCraft from "./Pages/ArtAndCraft/ArtAndCraft";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Fashion from "./Pages/Fashion/Fashion";
import Software from "./Pages/Software/Software";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/art-craft" element={<ArtAndCraft />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/software" element={<Software />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
