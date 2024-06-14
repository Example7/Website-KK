import { useState } from "react";
import { Button, Col, Form, Offcanvas, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";

const sizes = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49];

const chunkArray = (array: number[], chunkSize: number) => {
  const results = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    results.push(array.slice(i, i + chunkSize));
  }
  return results;
};

const sizeChunks = chunkArray(sizes, 3);

const checkboxOptions = [
  "Classics",
  "Rivalry",
  "Superstar",
  "Sleek",
  "Gazelle",
  "Trefoil",
  "Country",
  "Ultraboost",
  "Hoops",
  "AlphaBoost",
];

export function Filter() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleApply = () => {
    setShow(false);
  };

  return (
    <>
      <Button
        className="d-flex align-items-center px-4 py-2 rounded-0 border border-dark"
        variant="primary"
        onClick={handleShow}
      >
        <div className="pe-2">Filtruj i Sortuj</div>
        <FontAwesomeIcon icon={faSliders} />
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filtruj i Sortuj</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="position-relative">
          <div>
            <h5 className="fw-bold">SORTUJ WEDŁUG</h5>
            <div className="mb-3 d-flex flex-column align-items-start">
              <Button
                variant="outline-primary"
                className="me-2 mb-2 w-100 rounded-0 text-black fw-medium"
              >
                CENA (OD NAJNIŻSZEJ)
              </Button>
              <Button
                variant="outline-primary"
                className="me-2 mb-2 w-100 rounded-0 text-black fw-medium"
              >
                NAJNOWSZE
              </Button>
              <Button
                variant="outline-primary"
                className="me-2 mb-2 w-100 rounded-0 text-black fw-medium"
              >
                NAJPOPULARNIEJSZE
              </Button>
              <Button
                variant="outline-primary"
                className="me-2 mb-2 w-100 rounded-0 text-black fw-medium"
              >
                CENA (OD NAJWYŻSZEJ)
              </Button>
            </div>
          </div>
          <div className="mb-3">
            <h5 className="fw-bold">ROZMIAR</h5>
            {sizeChunks.map((chunk, rowIndex) => (
              <Row key={rowIndex} className="w-100 m-auto">
                {chunk.map((size, colIndex) => (
                  <Col xs={4} className="p-0" key={colIndex}>
                    <Button
                      variant="outline-primary"
                      className={`px-5 py-2 rounded-0 text-black fw-medium w-100 ${
                        colIndex === 1
                          ? "border-0 border-top border-bottom border-primary"
                          : ""
                      } ${rowIndex > 0 ? "border-top-0" : ""}`}
                      onClick={() => console.log(`Selected size: ${size}`)}
                    >
                      {size}
                    </Button>
                  </Col>
                ))}
              </Row>
            ))}
          </div>
          <div className="mb-3">
            <h5 className="fw-bold">KOLEKCJE</h5>
            <div>
              {checkboxOptions.map((option, index) => (
                <Form
                  key={index}
                  className="d-flex flex-column align-items-center w-100"
                >
                  <Form.Group
                    controlId={`checkbox${index + 1}`}
                    className="d-flex flex-column justify-content-start mb-2 w-100"
                  >
                    <Form.Check
                      type="checkbox"
                      id={`checkbox${index + 1}`}
                      label={option}
                      className="me-3 fs-5 custom-checkbox"
                    />
                  </Form.Group>
                </Form>
              ))}
            </div>
          </div>
          <div className="mb-3">
            <h5 className="fw-bold">EXCLUSIVES</h5>
            <Button
              variant="outline-primary"
              className="me-2 mb-2 w-100 rounded-0 text-black fw-medium"
            >
              Members Exclusives
            </Button>
            <Button
              variant="outline-primary"
              className="me-2 mb-2 w-100 rounded-0 text-black fw-medium"
            >
              Early Access
            </Button>
          </div>
          <div
            className="sticky-bottom z-2 bg-white py-4"
            style={{ bottom: "-15px" }}
          >
            <Button
              className="w-100 rounded-0 py-2"
              variant="primary"
              onClick={handleApply}
            >
              Zastosuj
            </Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
