import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { useLocalStorage } from "../../hooks/useLocalStrage";
import { Link } from "react-router-dom";

export function NavbarAddvertisement() {
  const [isAdvertisementClosed, setIsAdvertisementClosed] =
    useLocalStorage<boolean>("advertisementClosed", false);

  const handleCloseAdvertisement = () => {
    setIsAdvertisementClosed(true);
  };

  if (isAdvertisementClosed) {
    return null;
  }

  return (
    <div className="border-top border-bottom p-1 align-items-center justify-content navbar-advert">
      <Container className="align-items-center justify-content-center gap-2 navbar-advert-container">
        <div className="text-light text-nowrap">
          Jaśniej. Głośniej. Bardziej kolorowe. Bardziej odważne. I zabawniej.
          Podkręć na maksa swój letni styl.
        </div>
        <div>
          <Link
            to="/kobiety"
            className="px-3 py-1 text-decoration-none advert-btn fw-bold text-nowrap"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Kupuj teraz
          </Link>
        </div>
      </Container>
      <div
        className="text-white me-3 navbar-icon-close"
        onClick={handleCloseAdvertisement}
      >
        <FontAwesomeIcon icon={faTimes} className="fs-4" />
      </div>
    </div>
  );
}
