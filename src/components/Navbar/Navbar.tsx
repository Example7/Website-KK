import { Navbar as NavbarBs, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faBars,
  faMagnifyingGlass,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useState } from "react";
import { NavbarMobile } from "./NavbarMobile";
import { Signup } from "../Signup";
import "./Navbar.css";

export function Navbar() {
  const [showFlayout, setShowFlayout] = useState(false);
  const { openCart, cartQuantity } = useShoppingCart();
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const toggleFlayout = () => setShowFlayout(true);
  const openMobileNavbar = () => setIsMobileNavbarOpen(true);
  const closeMobileNavbar = () => setIsMobileNavbarOpen(false);
  const openSignup = () => setIsSignupOpen(true);
  const closeSignup = () => setIsSignupOpen(false);

  return (
    <>
      <NavbarBs className="shadow fw-bold navbar-main-container pt-0 justify-content-center">
        <Container className="navbar-container py-1 mx-2 ">
          <Nav className="me-auto fs-4 d-flex align-items-center">
            <Nav.Link
              to={"/"}
              as={NavLink}
              className="d-flex align-items-center gap-1 text-white py-2"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <FontAwesomeIcon icon={faShop} className="fs-2" />
              <div className="fs-2">SHOPI</div>
            </Nav.Link>
            {/* Mężczyźni */}
            <div
              className="text-white d-none d-md-block position-relative navbar-link"
              onMouseEnter={toggleFlayout}
              onMouseLeave={toggleFlayout}
            >
              <NavLink
                to={"/mężczyźni"}
                className="text-decoration-none text-white p-3"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Mężczyźni
              </NavLink>
              {showFlayout && (
                <div className="flayout">
                  <div className="flayout-bridge"></div>
                  <div className="flayout-square"></div>
                  <div className="flayout-item">
                    <NavLink
                      to={"mężczyźni-nowe_i_polecane"}
                      className="text-decoration-none text-white flayout-link fs-5"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      Nowe i polecane
                    </NavLink>
                  </div>
                  <div className="flayout-item">
                    <NavLink
                      to={"mężczyźni-buty"}
                      className="text-decoration-none text-white flayout-link fs-5"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      Buty
                    </NavLink>
                  </div>
                  <div className="flayout-item">
                    <NavLink
                      to={"mężczyźni-odzież"}
                      className="text-decoration-none text-white flayout-link fs-5"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      Odzież
                    </NavLink>
                  </div>
                  <div className="flayout-item">
                    <NavLink
                      to={"mężczyźni-akcesoria"}
                      className="text-decoration-none text-white flayout-link fs-5"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      Akcesoria
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
            {/* Kobiety */}
            <div
              className="text-white d-none d-md-block position-relative navbar-link"
              onMouseEnter={toggleFlayout}
              onMouseLeave={toggleFlayout}
            >
              <NavLink
                to={"/kobiety"}
                className="text-decoration-none text-white p-3"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Kobiety
              </NavLink>
              {showFlayout && (
                <div className="flayout">
                  <div className="flayout-bridge"></div>
                  <div className="flayout-square"></div>
                  <div className="flayout-item">
                    <NavLink
                      to={"kobiety-nowe_i_polecane"}
                      className="text-decoration-none text-white flayout-link fs-5"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      Nowe i polecane
                    </NavLink>
                  </div>
                  <div className="flayout-item">
                    <NavLink
                      to={"kobiety-buty"}
                      className="text-decoration-none text-white flayout-link fs-5"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      Buty
                    </NavLink>
                  </div>
                  <div className="flayout-item">
                    <NavLink
                      to={"kobiety-odzież"}
                      className="text-decoration-none text-white flayout-link fs-5"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      Odzież
                    </NavLink>
                  </div>
                  <div className="flayout-item">
                    <NavLink
                      to={"kobiety-akcesoria"}
                      className="text-decoration-none text-white flayout-link fs-5"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      Akcesoria
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
            {/* Dzieci */}
            <div
              className="text-white d-none d-md-block position-relative navbar-link"
              onMouseEnter={toggleFlayout}
              onMouseLeave={toggleFlayout}
            >
              <NavLink
                to={"/dzieci"}
                className="text-decoration-none text-white p-3"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Dzieci
              </NavLink>
              {showFlayout && (
                <div className="flayout">
                  <div className="flayout-bridge"></div>
                  <div className="flayout-square"></div>
                  <div className="flayout-item">
                    <NavLink
                      to={"dzieci-nowe_i_polecane"}
                      className="text-decoration-none text-white flayout-link fs-5"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      Nowe i polecane
                    </NavLink>
                  </div>
                  <div className="flayout-item">
                    <NavLink
                      to={"dzieci-buty"}
                      className="text-decoration-none text-white flayout-link fs-5"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      Buty
                    </NavLink>
                  </div>
                  <div className="flayout-item">
                    <NavLink
                      to={"dzieci-odzież"}
                      className="text-decoration-none text-white flayout-link fs-5"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      Odzież
                    </NavLink>
                  </div>
                  <div className="flayout-item">
                    <NavLink
                      to={"dzieci-akcesoria"}
                      className="text-decoration-none text-white flayout-link fs-5"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      Akcesoria
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
            {/* Outlet */}
            <div
              className="text-white d-none d-md-block position-relative navbar-link"
              onMouseEnter={toggleFlayout}
              onMouseLeave={toggleFlayout}
            >
              <NavLink
                to={"/outlet"}
                className="text-decoration-none text-white p-3"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Outlet
              </NavLink>
            </div>
          </Nav>
          {/* Przyciski i formularz wyszukiwania */}
          <div className="d-flex align-items-center justify-content-center mx-2 d-none d-xl-flex pe-3 nav-form-container p-1">
            <input
              type="search"
              placeholder="Wyszukaj"
              className="bg-transparent nav-form-input text-white"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-white search-icon"
            />
          </div>
          <div className="d-flex gap-3">
            <Button
              variant="outline-primary"
              className="rounded-circle d-md-block"
              style={{ width: "3rem", height: "3rem", position: "relative" }}
              onClick={openSignup}
            >
              <FontAwesomeIcon icon={faUser} />
            </Button>
            <Button
              onClick={openCart}
              variant="outline-primary"
              className="rounded-circle"
              style={{ width: "3rem", height: "3rem", position: "relative" }}
            >
              <FontAwesomeIcon icon={faCartShopping} />
              <div
                className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{
                  color: "white",
                  width: "1.5rem",
                  height: "1.5rem",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  transform: "translate(25%, 25%)",
                }}
              >
                {cartQuantity}
              </div>
            </Button>
            <Button
              variant="outline-primary"
              className="rounded-circle d-md-none"
              style={{ width: "3rem", height: "3rem", position: "relative" }}
              onClick={openMobileNavbar}
            >
              <FontAwesomeIcon icon={faBars} />
            </Button>
          </div>
        </Container>
      </NavbarBs>
      <NavbarMobile
        isOpen={isMobileNavbarOpen}
        closeMobileNavbar={closeMobileNavbar}
      />
      <Signup isOpen={isSignupOpen} closeSignup={closeSignup} />
    </>
  );
}
