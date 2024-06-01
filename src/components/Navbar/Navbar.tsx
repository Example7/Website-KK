import { Navbar as NavbarBs, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faBars,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useState } from "react";
import { NavbarMobile } from "./NavbarMobile";
import { Signup } from "../Signup";
import "./Navbar.css";

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const openMobileNavbar = () => setIsMobileNavbarOpen(true);
  const closeMobileNavbar = () => setIsMobileNavbarOpen(false);

  const openSignup = () => setIsSignupOpen(true);
  const closeSignup = () => setIsSignupOpen(false);

  return (
    <>
      <NavbarBs
        sticky="top"
        className="shadow py-2 fw-bold navbar-main-container"
      >
        <Container className="navbar-container">
          <Nav className="me-auto fs-5 d-flex align-items-center">
            <Nav.Link
              to={"/"}
              as={NavLink}
              className="d-flex align-items-center gap-1 text-white"
            >
              <FontAwesomeIcon icon={faCartShopping} className="fs-2" />
              <div className="fs-2">SHOPI</div>
            </Nav.Link>
            <Nav.Link
              to={"/nowe_i_polecane"}
              as={NavLink}
              className="text-white text-nowrap d-none d-md-block"
            >
              Nowe i polecane
            </Nav.Link>
            <Nav.Link
              to={"/mezczyzni"}
              as={NavLink}
              className="text-white d-none d-md-block"
            >
              Mężczyźni
            </Nav.Link>
            <Nav.Link
              to={"/kobiety"}
              as={NavLink}
              className="text-white d-none d-md-block"
            >
              Kobiety
            </Nav.Link>
            <Nav.Link
              to={"/dzieci"}
              as={NavLink}
              className="text-white d-none d-md-block"
            >
              Dzieci
            </Nav.Link>
          </Nav>
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
              onClick={openSignup} // Open the signup component on click
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
