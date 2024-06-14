import { Col, Row } from "react-bootstrap";
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./CardsOutlet.css";

export function CardsOutlet() {
  const imageRefs = useRef<HTMLImageElement[]>([]);

  const setFontSize = () => {
    imageRefs.current.forEach((img) => {
      if (img) {
        const height = img.clientHeight;
        const fontSize = height * 0.08;
        const overlayText = img.nextElementSibling as HTMLElement;

        if (overlayText) {
          overlayText.style.fontSize = `${fontSize}px`;
        }
      }
    });
  };

  useEffect(() => {
    imageRefs.current.forEach((img) => {
      if (img.complete) {
        setFontSize();
      } else {
        img.onload = setFontSize;
      }
    });

    window.addEventListener("resize", setFontSize);

    return () => {
      window.removeEventListener("resize", setFontSize);
    };
  }, []);

  return (
    <section>
      <Row className="w-100 m-0">
        <Col
          sm={12}
          md={4}
          className="d-flex justify-content-center align-items-center p-0 position-relative"
        >
          <NavLink
            to="/kobiety-outlet"
            className="w-100 h-100 position-relative"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              ref={(el) => el && imageRefs.current.push(el)}
              src="/images/img-outlet-1.jpg"
              alt="Outlet kobiety"
              className="outlet-image"
            />
            <div className="overlay-text">Kobiety</div>
          </NavLink>
        </Col>
        <Col
          sm={12}
          md={4}
          className="d-flex justify-content-center align-items-center p-0 position-relative"
        >
          <NavLink
            to="/mężczyźni-outlet"
            className="w-100 h-100 position-relative"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              ref={(el) => el && imageRefs.current.push(el)}
              src="/images/img-outlet-3.jpg"
              alt="Outlet Mężczyźni"
              className="outlet-image"
            />
            <div className="overlay-text">Mężczyźni</div>
          </NavLink>
        </Col>
        <Col
          sm={12}
          md={4}
          className="d-flex justify-content-center align-items-center p-0 position-relative"
        >
          <NavLink
            to="/dzieci-outlet"
            className="w-100 h-100 position-relative"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              ref={(el) => el && imageRefs.current.push(el)}
              src="/images/img-outlet-2.jpg"
              alt="Outlet Dzieci"
              className="outlet-image"
            />
            <div className="overlay-text">Dzieci</div>
          </NavLink>
        </Col>
      </Row>
    </section>
  );
}
