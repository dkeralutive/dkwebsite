import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage/HomePage";
import Error from "./Pages/Error/Error";
import About from "./Pages/About/About";
import ArtAndCraft from "./Pages/ArtAndCraft/ArtAndCraft";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Fashion from "./Pages/Fashion/Fashion";
import Software from "./Pages/Software/Software";
import HomeMain from "./Pages/HomeMain/HomeMain";
import Men from "./Pages/Men/Men";
import Women from "./Pages/Women/Women";
import AllBrands from "./Pages/AllBrands/AllBrands";
import Store from "./Pages/Store/Store";
import Customise from "./Pages/Customise/Customise";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomeMain />} />
        <Route path="/about" element={<About />} />
        <Route path="/art-craft" element={<ArtAndCraft />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/software" element={<Software />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/all-brands" element={<AllBrands />} />
        <Route path="/all-brands" element={<Store />} />
        <Route path="/all-brands" element={<Customise />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
