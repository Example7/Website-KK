import { Offcanvas } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApple,
  faFacebook,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

type SignupProps = {
  isOpen: boolean;
  closeSignup: () => void;
};

export function Signup({ isOpen, closeSignup }: SignupProps) {
  return (
    <Offcanvas show={isOpen} onHide={closeSignup} placement="end">
      <Offcanvas.Header closeButton className="pb-0"></Offcanvas.Header>
      <Offcanvas.Body>
        <div className="fs-3 fw-bold">
          W SHOPI CZEKAJĄ NA CIEBIE RÓŻNE KORZYŚCI
        </div>
        <p className="my-2 text-muted" style={{ fontSize: "13px" }}>
          Korzystaj z darmowej dostawy i kodów zniżkowych, kupuj produkty tylko
          dla klubowiczów.
        </p>
        <div className="fw-bold mb-2">
          Zaloguj się lub zarejestruj (to nic nie kosztuje)
        </div>
        <div className="d-flex gap-3 mb-3 signup-icon-container">
          <div className="p-2 px-3 border border-secondary">
            <FontAwesomeIcon icon={faApple} className="fs-4" />
          </div>
          <div className="p-2 px-3 border border-secondary">
            <FontAwesomeIcon icon={faFacebook} className="fs-4" />
          </div>
          <div className="p-2 px-3 border border-secondary">
            <FontAwesomeIcon icon={faGoogle} className="fs-4" />
          </div>
        </div>
        <form className="w-100 d-flex flex-column gap-3">
          <input
            type="text"
            id="email"
            placeholder="Wprowadź swój email"
            className="p-2"
          />
          <button
            type="button"
            className="px-5 py-2 fs-5 video-btn video-btn-active "
          >
            DALEJ
          </button>
        </form>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
