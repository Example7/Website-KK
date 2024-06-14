import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function CardsOutletDiscount() {
  return (
    <Container className="py-4">
      <div>
        <h1 className="m-0 fw-bold">DO 50% TANIEJ</h1>
        <p>Zacznij oszczędzać już dziś!</p>
      </div>
      <div>
        <Row className="m-0">
          <Col
            xs={12}
            sm={4}
            className="d-flex justify-content-center align-items-center position-relative p-0"
          >
            <NavLink
              to="/outlet-odzież"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img
                src="/images/img-outlet-dsc-1.jpg"
                alt="Outlet Discount Odzież"
                className="img-fluid outlet-cards-img"
              />
              <div className="overlay-text-2 text-black fs-1">Odzież</div>
            </NavLink>
          </Col>
          <Col
            xs={12}
            sm={4}
            className="d-flex justify-content-center align-items-center position-relative p-0"
          >
            <NavLink
              to="/outlet-buty"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img
                src="/images/img-outlet-dsc-2.jpg"
                alt="Outlet Discount Buty"
                className="img-fluid outlet-cards-img"
              />
              <div className="overlay-text-2 text-black fs-1">Buty</div>
            </NavLink>
          </Col>
          <Col
            xs={12}
            sm={4}
            className="d-flex justify-content-center align-items-center position-relative p-0"
          >
            <NavLink
              to="/outlet-akcesoria"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img
                src="/images/img-outlet-dsc-3.jpg"
                alt="Outlet Discount Akcesoria"
                className="img-fluid outlet-cards-img"
              />
              <div className="overlay-text-2 text-black fs-1">Akcesoria</div>
            </NavLink>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
