import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./ZamowieniaIZwroty.css";
import { useState } from "react";

export function ZamowieniaIZwrotySection1() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container>
      <section className="section-zwroty mb-2">
        <h4 className="fw-bold fs-2 mt-5 mb-4">ZAMÓWIENIA I ZWROTY</h4>
        <p className="text-muted">
          Możesz bezpłatnie wymienić lub zwrócić produkt w ciągu 30 dni od daty
          otrzymania swojego zamówienia.
        </p>
        <p className="text-muted">
          Możesz również dokonać zwrotu w sklepie, jeśli zamówiono produkt bez
          opłaty za dostawę – upewnij się, że masz pod ręką numer zamówienia.
        </p>
        <Form
          className="w-100"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="fs-5 fw-bold my-4">
              JAKI JEST TWÓJ ADRES E-MAIL?
            </Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="E-mail *"
              className="border-primary rounded-0"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <h4 className="fw-bold fs-5 my-4">CO CHCESZ ZROBIĆ?</h4>
          <div key="checkbox-key" className="mb-3 d-flex flex-column">
            <Form.Check
              required
              inline
              label=" Monitorować zamówienie"
              name="group1"
              type="radio"
              id="1"
              className="fs-5 fw-medium custom-radio py-3 border-bottom border-top border-primary"
            />
            <Form.Check
              required
              inline
              label="Rozpocząć wymianę lub zwrot"
              name="group1"
              type="radio"
              id="2"
              className="fs-5 fw-medium custom-radio py-3 border-bottom border-primary"
            />
          </div>
          <Button
            type="submit"
            className="mb-5 py-2 px-5 rounded-0 section-zwroty-btn"
          >
            Kontynuuj
          </Button>
        </Form>
      </section>
    </Container>
  );
}
