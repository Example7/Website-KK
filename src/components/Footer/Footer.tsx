import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faYoutube,
  faTwitter,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <div className="pt-5 footer-container text-white">
      <Container>
        <section className="d-flex flex-column align-items-center justify-content-center text-center">
          <h2 className="fs-2 fw-bold pb-2">
            Dołącz do newslettera i otrzymuj najlepsze promocje na nasze
            produkty
          </h2>
          <h2 className="fs-4 fw-medium mb-3">
            Możesz wypisać się w dowolnym momencie.
          </h2>
          <Form className="d-flex align-items-center justify-content-center mb-4">
            <Form.Group
              controlId="formBasicEmail"
              className="d-flex w-100 form-group"
            >
              <Form.Control
                type="email"
                placeholder="Wprowadź Email"
                className="py-2 px-4 border border-dark form-input"
              />
              <Button variant="primary" type="submit" className="form-button">
                Wyślij
              </Button>
            </Form.Group>
          </Form>
          <div className="d-flex w-100 justify-content-center text-nowrap footer-wrapper">
            <Row className="gap-3 m-auto footer-row-container">
              <Col className="d-flex flex-column align-items-center m-3 footer-col align-items-md-start ">
                <h2>Produkty</h2>
                <Link to="/">Buty</Link>
                <Link to="/">Ubrania</Link>
                <Link to="/">Akcesoria</Link>
                <Link to="/">Nowości</Link>
                <Link to="/">Najpopularniejsze</Link>
              </Col>
              <Col className="d-flex flex-column align-items-center m-3 footer-col align-items-md-start">
                <h2>Sporty</h2>
                <Link to="/">Futbol</Link>
                <Link to="/">Koszykówka</Link>
                <Link to="/">Golf</Link>
                <Link to="/">Bieganie</Link>
                <Link to="/">Tenis</Link>
              </Col>
              <Col className="d-flex flex-column align-items-center m-3 footer-col align-items-md-start">
                <h2>Kolekcje</h2>
                <Link to="/">Originals</Link>
                <Link to="/">Ultraboost</Link>
                <Link to="/">Gazelle</Link>
                <Link to="/">Superstar</Link>
              </Col>
              <Col className="d-flex flex-column align-items-center m-3 footer-col align-items-md-start">
                <h2>Obserwuj nas</h2>
                <Link to="/">Instagram</Link>
                <Link to="/">Facebook</Link>
                <Link to="/">Youtube</Link>
                <Link to="/">Twitter</Link>
              </Col>
            </Row>
          </div>
        </section>
        <section className="social-media pb-2">
          <div className="social-media-wrap pt-1">
            <div className="footer-logo">
              <Link to="/" className="social-logo">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="footer-icon"
                />
                SHOPI
              </Link>
            </div>
            <small className="website-rights">SHOPI © 2024</small>
            <div className="social-icons">
              <Link
                className="social-icon-link facebook"
                to="/"
                target="_blank"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link
                className="social-icon-link instagram"
                to="/"
                target="_blank"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link
                className="social-icon-link youtube"
                to="/"
                target="_blank"
                aria-label="Youtube"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </Link>
              <Link
                className="social-icon-link twitter"
                to="/"
                target="_blank"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
              <Link
                className="social-icon-link linkedin"
                to="/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
