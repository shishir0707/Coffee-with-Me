import { Route, Routes } from "react-router-dom";
import MainNav from "./components/reuseable/mainNav/mainNav";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Home from "./pages/home/home";
import Info from "./pages/info/info";
import Reservation from "./pages/info/reservation/reservation";
import Testimonials from "./pages/info/testimonials/testimonials";
import Menu from "./pages/menu/menu";
import Services from "./pages/menu/services/services";

import './services/sass/main.scss';

function App() {
  return (
    <div>
      <MainNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/menu" element={<Menu />} />

        <Route path="/info" element={<Info />}>
          <Route path="reservation" element={<Reservation />} />
          <Route path="testimonial" element={<Testimonials />} />
        </Route>

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div >
  );
}

export default App;
