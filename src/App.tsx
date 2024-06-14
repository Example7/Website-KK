import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Mezczyzni } from "./pages/Mezczyzni/Mezczyzni";
import { Kobiety } from "./pages/Kobiety/Kobiety";
import { Dzieci } from "./pages/Dzieci/Dzieci";
import { Navbar } from "./components/Navbar/Navbar";
import "./index.css";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Footer } from "./components/Footer/Footer";
import { NavbarAddvertisement } from "./components/Navbar/NavbarAddvertisment";
import { Outlet } from "./pages/Outlet/Outlet";
import { Newsletter } from "./pages/Newsletter";
import { NoweIPolecane as MezczyzniNoweIPolecane } from "./pages/Mezczyzni/NoweIPolecane";
import { Buty as MezczyzniButy } from "./pages/Mezczyzni/Buty";
import { Odziez as MezczyzniOdziez } from "./pages/Mezczyzni/Odziez";
import { Akcesoria as MezczyzniAkcesoria } from "./pages/Mezczyzni/Akcesoria";
import { Outlet as MezczyzniOutlet } from "./pages/Mezczyzni/Outlet";
import { NoweIPolecane as KobietyNoweIPolecane } from "./pages/Kobiety/NoweIPolecane";
import { Buty as KobietyButy } from "./pages/Kobiety/Buty";
import { Odziez as KobietyOdziez } from "./pages/Kobiety/Odziez";
import { Akcesoria as KobietyAkcesoria } from "./pages/Kobiety/Akcesoria";
import { Outlet as KobietyOutlet } from "./pages/Kobiety/Outlet";
import { NoweIPolecane as DziecNoweIPolecane } from "./pages/Dzieci/NoweIPolecane";
import { Buty as DzieciButy } from "./pages/Dzieci/Buty";
import { Odziez as DzieciOdziez } from "./pages/Dzieci/Odziez";
import { Akcesoria as DzieciAkcesoria } from "./pages/Dzieci/Akcesoria";
import { Outlet as DzieciOutlet } from "./pages/Dzieci/Outlet";
import { Akcesoria as OutletAkcesoria } from "./pages/Outlet/Akcesoria";
import { Odziez as OutletOdziez } from "./pages/Outlet/Odziez";
import { Buty as OutletButy } from "./pages/Outlet/Buty";
import { NavbarMenu } from "./components/Navbar/NavbarMenu";
import { Pomoc } from "./pages/Pomoc";
import { ZamowieniaIZwroty } from "./pages/ZamowieniaIZwroty";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <NavbarMenu />
        <Navbar />
        <NavbarAddvertisement />
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mężczyźni" element={<Mezczyzni />} />
            <Route
              path="/mężczyźni-nowe_i_polecane"
              element={<MezczyzniNoweIPolecane />}
            />
            <Route path="/mężczyźni-buty" element={<MezczyzniButy />} />
            <Route path="/mężczyźni-odzież" element={<MezczyzniOdziez />} />
            <Route
              path="/mężczyźni-akcesoria"
              element={<MezczyzniAkcesoria />}
            />
            <Route path="/mężczyźni-outlet" element={<MezczyzniOutlet />} />
            <Route path="/kobiety" element={<Kobiety />} />
            <Route
              path="/kobiety-nowe_i_polecane"
              element={<KobietyNoweIPolecane />}
            />
            <Route path="/kobiety-buty" element={<KobietyButy />} />
            <Route path="/kobiety-odzież" element={<KobietyOdziez />} />
            <Route path="/kobiety-akcesoria" element={<KobietyAkcesoria />} />
            <Route path="/kobiety-outlet" element={<KobietyOutlet />} />
            <Route path="/dzieci" element={<Dzieci />} />
            <Route
              path="/dzieci-nowe_i_polecane"
              element={<DziecNoweIPolecane />}
            />
            <Route path="/dzieci-buty" element={<DzieciButy />} />
            <Route path="/dzieci-odzież" element={<DzieciOdziez />} />
            <Route path="/dzieci-akcesoria" element={<DzieciAkcesoria />} />
            <Route path="/dzieci-outlet" element={<DzieciOutlet />} />
            <Route path="/outlet" element={<Outlet />} />
            <Route path="/outlet-nowe_i_polecane" />
            <Route path="/outlet/kobiety" element={<Kobiety />} />
            <Route path="/outlet/mezczyzni" element={<Mezczyzni />} />
            <Route path="/outlet/dzieci" element={<Dzieci />} />
            <Route path="/outlet-akcesoria" element={<OutletAkcesoria />} />
            <Route path="/outlet-odzież" element={<OutletOdziez />} />
            <Route path="/outlet-buty" element={<OutletButy />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/pomoc" element={<Pomoc />} />
            <Route
              path="/zamówienia_i_zwroty"
              element={<ZamowieniaIZwroty />}
            />
          </Routes>
        </section>
        <Footer />
      </ShoppingCartProvider>
    </>
  );
}

export default App;
