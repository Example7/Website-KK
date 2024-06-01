import { Offcanvas, Stack, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

type NavbarMobileProps = {
  isOpen: boolean;
  closeMobileNavbar: () => void;
};

export function NavbarMobile({ isOpen, closeMobileNavbar }: NavbarMobileProps) {
  return (
    <Offcanvas show={isOpen} onHide={closeMobileNavbar} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <Nav.Link
            to={"/"}
            as={NavLink}
            onClick={closeMobileNavbar}
            className="d-flex align-items-center gap-1 text-dark"
          >
            <FontAwesomeIcon icon={faCartShopping} />
            <div>Shopi</div>
          </Nav.Link>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          <Nav className="flex-column">
            <Nav.Link
              to={"/nowe_i_polecane"}
              as={NavLink}
              onClick={closeMobileNavbar}
            >
              Nowe i polecane
            </Nav.Link>
            <Nav.Link
              to={"/mezczyzni"}
              as={NavLink}
              onClick={closeMobileNavbar}
            >
              Mężczyźni
            </Nav.Link>
            <Nav.Link to={"/kobiety"} as={NavLink} onClick={closeMobileNavbar}>
              Kobiety
            </Nav.Link>
            <Nav.Link to={"/dzieci"} as={NavLink} onClick={closeMobileNavbar}>
              Dzieci
            </Nav.Link>
          </Nav>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
