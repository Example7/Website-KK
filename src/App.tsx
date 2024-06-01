import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Mezczyzni } from "./pages/Mezczyzni";
import { Kobiety } from "./pages/Kobiety";
import { Dzieci } from "./pages/Dzieci";
import { Navbar } from "./components/Navbar/Navbar";
import "./index.css";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { NoweIPolecane } from "./pages/NoweIPolecane";
import { Footer } from "./components/Footer/Footer";
import { NavbarAddvertisement } from "./components/Navbar/NavbarAddvertisment";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <NavbarAddvertisement />
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nowe_i_polecane" element={<NoweIPolecane />} />
            <Route path="/mezczyzni" element={<Mezczyzni />} />
            <Route path="/kobiety" element={<Kobiety />} />
            <Route path="/dzieci" element={<Dzieci />} />
          </Routes>
        </section>
        <Footer />
      </ShoppingCartProvider>
    </>
  );
}

export default App;
