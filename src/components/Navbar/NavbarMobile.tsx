import { useState } from "react";
import { Offcanvas, Stack, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

type Section = {
  title: string;
  links: { to: string; text: string }[];
};

const sections: Section[] = [
  {
    title: "Mężczyźni",
    links: [
      { to: "/mężczyźni-nowe_i_polecane", text: "Nowe i Polecane" },
      { to: "/mężczyźni-buty", text: "Buty" },
      { to: "/mężczyźni-odzież", text: "Odzież" },
      { to: "/mężczyźni-akcesoria", text: "Akcesoria" },
    ],
  },
  {
    title: "Kobiety",
    links: [
      { to: "/kobiety-nowe_i_polecane", text: "Nowości" },
      { to: "/kobiety-buty", text: "Buty" },
      { to: "/kobiety-odzież", text: "Odzież" },
      { to: "/kobiety-akcesoria", text: "Akcesoria" },
    ],
  },
  {
    title: "Dzieci",
    links: [
      { to: "/dzieci-nowe_i_polecane", text: "Nowości" },
      { to: "/dzieci-buty", text: "Buty dziecięce" },
      { to: "/dzieci-odzież", text: "Odzież dziecięca" },
      { to: "/dzieci-akcesoria", text: "Akcesoria dziecięce" },
    ],
  },
];

type NavbarMobileProps = {
  isOpen: boolean;
  closeMobileNavbar: () => void;
};

export function NavbarMobile({ isOpen, closeMobileNavbar }: NavbarMobileProps) {
  const [activeSection, setActiveSection] = useState<Section | null>(null);

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeAllOffcanvases();
  };

  const handleSectionClick = (section: Section) => {
    setActiveSection(section);
  };

  const closeAllOffcanvases = () => {
    setActiveSection(null);
    closeMobileNavbar();
  };

  const handleBackClick = () => {
    setActiveSection(null);
  };

  return (
    <>
      <Offcanvas show={isOpen} onHide={closeAllOffcanvases} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Nav.Link
              to={"/"}
              as={NavLink}
              onClick={handleNavClick}
              className="d-flex align-items-center gap-1 text-dark fs-3"
            >
              <FontAwesomeIcon icon={faCartShopping} />
              <div>Shopi</div>
            </Nav.Link>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={3}>
            <Nav className="flex-column fs-4 fw-bold">
              {sections.map((section, index) => (
                <Nav.Link
                  key={index}
                  to={"#"}
                  as={NavLink}
                  onClick={() => handleSectionClick(section)}
                  className="text-black d-flex w-100 justify-content-between"
                >
                  {section.title}
                  <div>&gt;</div>
                </Nav.Link>
              ))}

              <Nav.Link
                to={"/outlet"}
                as={NavLink}
                onClick={handleNavClick}
                className="text-black fw-normal"
              >
                Outlet
              </Nav.Link>
              <Nav.Link
                to={"/pomoc"}
                as={NavLink}
                onClick={handleNavClick}
                className="text-black fw-normal"
              >
                Pomoc
              </Nav.Link>
              <Nav.Link
                to={"/zamówienia_i_zwroty"}
                as={NavLink}
                onClick={handleNavClick}
                className="text-black fw-normal"
              >
                Zamówienia i zwroty
              </Nav.Link>
            </Nav>
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>

      {activeSection && (
        <Offcanvas show={true} onHide={closeAllOffcanvases} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="fw-bold fs-4">
              <Button
                variant="link"
                className="text-black fs-5 fw-bold"
                onClick={handleBackClick}
              >
                &lt; {activeSection.title}
              </Button>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Stack gap={3}>
              <Nav className="flex-column fs-4 fw-normal">
                {activeSection.links.map((link, index) => (
                  <Nav.Link
                    key={index}
                    to={link.to}
                    as={NavLink}
                    onClick={handleNavClick}
                    className="text-black"
                  >
                    {link.text}
                  </Nav.Link>
                ))}
              </Nav>
            </Stack>
          </Offcanvas.Body>
        </Offcanvas>
      )}
    </>
  );
}
