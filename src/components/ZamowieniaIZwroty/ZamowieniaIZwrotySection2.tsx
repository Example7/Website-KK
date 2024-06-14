import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export function ZamowieniaIZwrotySection2() {
  return (
    <Container className="w-75 pt-4 m-auto border-top border-primary mb-4">
      <Row className="justify-content-between gap-3 mb-4">
        <Col md={5} className="p-0 align-items-center">
          <h4 className="w-100 fw-bold text-align-cente">
            POTRZEBUJESZ POMOCY?
          </h4>
        </Col>
        <Col md={5} className="p-0 align-items-center">
          <Link
            to={""}
            className="w-100 d-flex text-black fw-bold justify-content-md-end"
          >
            ZOBACZ WSZYSTKIE TEMATY
          </Link>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center gap-4">
        <Col md={5}>
          <Link
            to="#"
            className="border border-primary mb-4 d-flex flex-column justify-content-between gap-3  p-4 text-decoration-none"
            style={{ height: "150px" }}
          >
            <h5 className="fw-bold mb-0">Zwracanie produktu</h5>
            <p className="text-secondary m-0">
              Odesłanie Rzeczy | Zwrót Pieniędzy
            </p>
          </Link>
        </Col>
        <Col md={5}>
          <Link
            to="#"
            className="border border-primary mb-4 d-flex flex-column justify-content-between gap-3  p-4 text-decoration-none"
            style={{ height: "150px" }}
          >
            <h5 className="fw-bold mb-0">Jaki jest czas oraz koszt dostawy?</h5>
            <p className="text-secondary m-0">Dostawa</p>
          </Link>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center gap-4">
        <Col md={5}>
          <Link
            to="#"
            className="border border-primary mb-4 d-flex flex-column justify-content-between gap-3  p-4 text-decoration-none"
            style={{ height: "150px" }}
          >
            <h5 className="fw-bold m-0">Zasady dotyczące zwrotów</h5>
            <p className="text-secondary m-0">
              Odesłanie Rzeczy | Zwrót Pieniędzy
            </p>
          </Link>
        </Col>
        <Col md={5}>
          <Link
            to="#"
            className="border border-primary mb-4 d-flex flex-column justify-content-between gap-3 p-4 text-decoration-none"
            style={{ height: "150px" }}
          >
            <h5 className="fw-bold m-0">
              Co zrobić, jeśli jeszcze nie dotarła do mnie przesyłka?
            </h5>
            <p className="text-secondary m-0">Dostawa</p>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
