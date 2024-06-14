import { Link } from "react-router-dom";
import "./HeroComponent.css";

type HeroComponentProps = {
  src: string;
  h1Text: string;
  pText: string;
  textColor: string;
  showBrowseButton?: boolean;
};

export function HeroComponent({
  src,
  h1Text,
  pText,
  textColor,
  showBrowseButton = true,
}: HeroComponentProps) {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="vh-100 w-100 d-flex flex-column align-items-center object-fit-contain position-relative">
      <img
        src={src}
        alt="Main Image"
        className="justify-item-center w-100 h-100 object-fit-cover position-relative"
      />
      <div className="position-absolute top-50 start-50 translate-middle text-center text-white w-100">
        <h1 className={`vidoe-header ${textColor}`}>{h1Text}</h1>
        <p className="my-2 fs-1">{pText}</p>
        <div className="d-flex flex-column justify-content-center gap-3 flex-md-row">
          {showBrowseButton && (
            <Link
              to="/"
              className="px-5 py-2 my-2 fs-5 text-decoration-none video-btn-active"
              onClick={() => scrollToSection("section-cart")}
            >
              Przeglądaj
            </Link>
          )}
          <Link
            to="/kobiety"
            className="px-5 py-2 my-2 fs-5 text-decoration-none video-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Kupuj teraz
          </Link>
        </div>
      </div>
    </div>
  );
}
