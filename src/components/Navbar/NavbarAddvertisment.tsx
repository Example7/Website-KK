import { Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { useLocalStorage } from "../../hooks/useLocalStrage";

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
          <Button
            variant="outline-primary text-nowrap"
            size="sm"
            onClick={handleCloseAdvertisement}
          >
            KUPUJ TERAZ
          </Button>
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
