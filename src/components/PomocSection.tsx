import {
  faBagShopping,
  faCreditCard,
  faEnvelopeOpenText,
  faMaximize,
  faMoneyCheck,
  faPiggyBank,
  faShop,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";

export function PomocSection() {
  return (
    <Container>
      <section>
        <div>
          <h3 className="fs-2 fw-bold my-4">CZĘSTO ZADAWANE PYTANIA</h3>
        </div>
        <div>
          <div className="d-flex flex-column gap-4 mb-4">
            <Link
              to="#"
              className="text-dark fw-bold"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              JAKI JEST CZAS ORAZ KOSZT DOSTAWY?
            </Link>
            <Link
              to="#"
              className="text-dark fw-bold"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              W JAKI SPOSÓB MOGĘ DOKONAĆ ZWROTU PRODUKTU(-ÓW)?
            </Link>
            <Link
              to="#"
              className="text-dark fw-bold"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              CZY MOGĘ WYMIENIĆ ZAKUPIONE PRODUKTY?
            </Link>
            <Link
              to="#"
              className="text-dark fw-bold"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              KIEDY OTRZYMAM ZWROT PIENIĘDZY ZA ODESŁANE/ZWRÓCONE ZAMÓWIENIE?
            </Link>
            <Link
              to="#"
              className="text-dark fw-bold"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              W JAKI SPOSÓB MOGĘ ŚLEDZIĆ SWOJE ZAMÓWIENIE LUB STATUS DOSTAWY?
            </Link>
          </div>
        </div>
      </section>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <div>
          <h3 className="fs-2 fw-bold mb-3">DODATKOWE ZAGADNIENIA</h3>
        </div>
        <Row>
          <Col md={4}>
            <Nav variant="pills" className="flex-column gap-2 mb-5">
              <Nav.Item>
                <Nav.Link
                  eventKey="first"
                  className="d-flex gap-4 align-items-center border-bottom border-primary fs-5 fw-medium p-2"
                >
                  <FontAwesomeIcon icon={faTruck} />
                  <div>DOSTAWA</div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="second"
                  className="d-flex gap-4 align-items-center border-bottom border-primary fs-5 fw-medium p-2"
                >
                  <FontAwesomeIcon icon={faMoneyCheck} />
                  <div>ZAMAWIANIE</div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="third"
                  className="d-flex gap-4 align-items-center border-bottom border-primary fs-5 fw-medium p-2"
                >
                  <FontAwesomeIcon icon={faCreditCard} />
                  <div>PŁACENIE</div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="fourth"
                  className="d-flex gap-4 align-items-center border-bottom border-primary fs-5 fw-medium p-2"
                >
                  <FontAwesomeIcon icon={faMaximize} />
                  <div>TABELE ROZMIARÓW</div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="fifth"
                  className="d-flex gap-4 align-items-center border-bottom border-primary fs-5 fw-medium p-2"
                >
                  <FontAwesomeIcon icon={faEnvelopeOpenText} />
                  <div>SHOPI CLUB I NEWSLETTER</div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="sixth"
                  className="d-flex gap-4 align-items-center border-bottom border-primary fs-5 fw-medium p-2"
                >
                  <FontAwesomeIcon icon={faPiggyBank} />
                  <div>PROMOCJE I KODY</div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="seventh"
                  className="d-flex gap-4 align-items-center border-bottom border-primary fs-5 fw-medium p-2"
                >
                  <FontAwesomeIcon icon={faBagShopping} />
                  <div>PRODUKTY</div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="eighth"
                  className="d-flex gap-4 align-items-center border-bottom border-primary fs-5 fw-medium p-2"
                >
                  <FontAwesomeIcon icon={faShop} />
                  <div>INFORMACJE O FIRMIE</div>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md={8}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div className="d-flex flex-column gap-2">
                  <Link to="#" className="text-dark fw-medium">
                    Jaki jest czas oraz koszt dostawy?
                  </Link>
                  <Link to="#" className="text-dark fw-medium">
                    W jaki sposób mogę śledzić swoje zamówienie lub status
                    dostawy?
                  </Link>
                  <Link to="#" className="text-dark fw-medium">
                    Co zrobić, jeśli otrzymam niewłaściwy produkt?
                  </Link>
                  <Link to="#" className="text-dark fw-medium">
                    Dlaczego moje zamówienie nie może zostać nadane?
                  </Link>
                  <Link to="#" className="text-dark fw-medium">
                    Co zrobić, jeśli jeszcze nie dotarła do mnie przesyłka?
                  </Link>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div className="d-flex flex-column gap-2">
                  <Link to="#" className="text-dark fw-medium">
                    Jakie wiadomości e-mail otrzymam na temat mojego zamówienia?
                  </Link>
                  <Link to="#" className="text-dark fw-medium">
                    Jakie powiadomienia dotyczące mojego zamówienia będę
                    otrzymywać poprzez aplikację shopi?
                  </Link>
                  <Link to="#" className="text-dark fw-medium">
                    Gdzie mogę znaleźć numer mojego zamówienia?
                  </Link>
                  <Link to="#" className="text-dark fw-medium">
                    Jaki jest czas dostawy produktów, które mają znowu pojawić
                    się w magazynie?
                  </Link>
                  <Link to="#" className="text-dark fw-medium">
                    Czy mogę zmodyfikować swoje zamówienie?
                  </Link>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <div className="d-flex flex-column gap-2">
                  <Link to="#" className="text-dark fw-medium">
                    Jakie są metody płatności?
                  </Link>
                  <Link to="#" className="text-dark fw-medium">
                    Czy adresy rachunku i dostawy mogą być różne?
                  </Link>
                  <Link to="#" className="text-dark fw-medium">
                    Kiedy zostanę obciążony za zamówione produkty?
                  </Link>
                  <Link to="#" className="text-dark fw-medium">
                    Czy mogę otrzymać fakturę VAT?
                  </Link>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <div className="d-flex flex-column gap-2">
                  <Link to="#" className="text-dark fw-medium">
                    Tabele rozmiarów
                  </Link>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                <div className="d-flex flex-column gap-2">
                  <Link to="#" className="text-dark fw-medium">
                    Jak zarejestrować się, by otrzymywać newslettery od shopi?
                  </Link>
                  <Link to="#" className="text-dark fw-medium">
                    Jak mogę założyć konto?
                  </Link>
                  <Link to="#" className="text-dark fw-medium">
                    Jak mogę zmienić ustawienia mojego konta shopi?
                  </Link>
                  <Link to="#" className="text-dark fw-medium">
                    Dlaczego mam problem z zalogowaniem się na moje konto?
                  </Link>
                  <Link to="#" className="text-dark fw-medium">
                    Jak mogę usunąć moje konto shopi?
                  </Link>
                  <Link to="#" className="text-dark fw-medium">
                    Shopi Club
                  </Link>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="sixth">
                <div className="d-flex flex-column gap-2">
                  <Link to="#" className="text-dark fw-medium">
                    Jak mogę korzystać z kodu promocyjnego?
                  </Link>
                  <Link to="#" className="text-dark fw-medium">
                    Jakie produkty są wyłączone z promocji?
                  </Link>
                  <Link to="#" className="text-dark fw-medium">
                    Dlaczego mój kod promocyjny nie działa?
                  </Link>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="seventh">
                <div className="d-flex flex-column gap-2">
                  <Link to="#" className="text-dark fw-medium">
                    Jakie wiadomości e-mail otrzymam na temat mojego zamówienia?
                  </Link>
                  <Link to="#" className="text-dark fw-medium">
                    Jakie powiadomienia dotyczące mojego zamówienia będę
                    otrzymywać poprzez aplikację shopi?
                  </Link>
                  <Link to="#" className="text-dark fw-medium">
                    Gdzie mogę znaleźć numer mojego zamówienia?
                  </Link>
                  <Link to="#" className="text-dark fw-medium">
                    Jaki jest czas dostawy produktów, które mają znowu pojawić
                    się w magazynie?
                  </Link>
                  <Link to="#" className="text-dark fw-medium">
                    Czy mogę zmodyfikować swoje zamówienie?
                  </Link>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="eighth">
                <div className="d-flex flex-column gap-2">
                  <Link to="#" className="text-dark fw-medium">
                    Kontakt
                  </Link>
                  <Link to="#" className="text-dark fw-medium">
                    Dlaczego moje zamówienie nie może zostać nadane?
                  </Link>
                  <Link to="#" className="text-dark fw-medium">
                    Co zrobić, jeśli jeszcze nie dotarła do mnie przesyłka?
                  </Link>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
        <Row className="mb-5 gap-5 gap-md-0">
          <Col md={6}>
            <h5 className="fw-bold">GDZIE JEST MOJE ZAMÓWIENIE?</h5>
            <p className="text-muted">
              Zaloguj się lub skorzystaj z funkcji monitorowania (Tracker), aby
              śledzić swoje zamówienie, rozpocząć zwrot, anulować lub sprawdzić
              status zwrotu pieniędzy.
            </p>
            <Link to="#" className="text-dark fw-bold">
              LOGOWANIE
            </Link>
          </Col>
          <Col md={6}>
            <h5 className="fw-bold">
              NADAL NIE MOŻESZ ZNALEŹĆ ODPOWIEDZI NA SWOJE PYTANIE?
            </h5>
            <h5 className="fw-bold">ZWRÓĆ SIĘ DO DZIAŁU OBSŁUGI KLIENTA</h5>
            <p className="text-muted">Pon.- Pt.: 08:00 - 18:00</p>
            <p className="text-muted">Sobota: 09:00 - 17:00</p>
            <Link to="#" className="text-dark fw-bold ">
              OBSŁUGA KLIENTA
            </Link>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}
