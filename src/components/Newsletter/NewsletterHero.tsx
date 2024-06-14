import { Button, Col, Form, Row } from "react-bootstrap";
import "./Newsletter.css";

export function NewsletterHero() {
  return (
    <section className="vh-100">
      <Row className="h-100 w-100 m-0">
        <Col md={6} className="newsletter-col-1 p-0">
          <img
            src="/images/img-newsletter-2.jpg"
            alt="Newsletter Img"
            className="h-100 w-100 object-fit-cover newsletter-img"
          />
        </Col>
        <Col md={6} className="mt-5 newsletter-col-2">
          <h1 className="fw-bold mb-3">OTRZYMAJ ZNIŻKĘ 20%</h1>
          <p className="text-muted mb-3">
            Zapisz się i otrzymuj oferty, promocje i spersonalizowane
            powiadomienia na swoją skrzynkę
          </p>
          <Form className="d-flex flex-column align-items-center w-100">
            <Form.Group controlId="formBasicEmail" className="w-100 mb-4">
              <Form.Control
                type="email"
                placeholder="Wprowadź Email"
                className="py-2 px-4 border border-dark mt-3"
              />
            </Form.Group>
            <Form.Group
              controlId="formBasicCheckbox"
              className="d-flex flex-column justify-content-start mb-3 w-100"
            >
              <p className="text-muted mb-3">
                Proszę wybrać co najmniej jeden cel:
              </p>
              <div className="d-flex">
                <Form.Check
                  type="checkbox"
                  id="checkbox1"
                  label="Odzież dla kobiet"
                  className="me-3 fs-5 custom-checkbox"
                />
                <Form.Check
                  type="checkbox"
                  id="checkbox2"
                  label="Odzież dla mężczyzn"
                  className="fs-5 custom-checkbox"
                />
              </div>
            </Form.Group>
            <Form.Group
              controlId="formBasicCheckbox2"
              className="d-flex flex-column justify-content-start mb-3 w-100"
            >
              <p className="text-muted mb-3">
                Po zapoznaniu się z treścią dokumentu Polityka Prywatności
                wyrażam zgodę na przetwarzanie moich danych w celu:
              </p>
              <Form.Check
                type="checkbox"
                id="checkbox3"
                label="Cele marketingowe"
                className="fs-5 custom-checkbox"
              />
            </Form.Group>
            <Button
              variant="primary"
              type="button"
              className="align-self-start px-5"
            >
              DOŁĄCZ DO KLUBU
            </Button>
          </Form>
        </Col>
      </Row>
    </section>
  );
}
