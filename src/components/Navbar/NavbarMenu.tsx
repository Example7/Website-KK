import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function NavbarMenu() {
  return (
    <NavbarBs sticky="top" className="fw-bold navbar-main-container-menu p-0">
      <Container className="p-0">
        <Nav
          className="w-100 d-flex align-items-center justify-content-end gap-1"
          style={{ fontSize: "14px" }}
        >
          <Nav.Link
            to={"/pomoc"}
            as={NavLink}
            className="d-flex align-items-center gap-1 text-white mt-1 py-0 navMenu-link fw-lighter"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Pomoc
          </Nav.Link>
          <Nav.Link
            to={"/zamówienia_i_zwroty"}
            as={NavLink}
            className="d-flex align-items-center gap-1 text-white mt-1 py-0 navMenu-link fw-lighter"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Zamówienia i zwroty
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
}
