import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import storeItems from "../../data/item.json";
import { StoreItem } from "../StoreItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { formatCategory } from "../../utilities/formatCategory";
import "./CategorySection.css";

type CategorySectionProps = {
  category: string;
};

export function CategorySection({ category }: CategorySectionProps) {
  const formattedCategory = formatCategory(category);

  const filteredItems =
    category === "NoweIPolecane"
      ? storeItems.filter((item) => item.isNewOrRecommended)
      : storeItems.filter((item) => item.category === category);

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <>
      <Container>
        <div className="my-5 d-flex gap-3 navigation-panel">
          <div
            className="d-flex align-items-center gap-2"
            onClick={handleGoBack}
            style={{ cursor: "pointer" }}
          >
            <FontAwesomeIcon icon={faArrowLeftLong} />
            <div className="border-bottom border-dark fw-bold category-section-link">
              POWRÓT
            </div>
          </div>
          <span className="d-flex align-items-center">
            <Link
              className="text-decoration-none text-black category-section-link"
              to="/"
              style={{ borderBottom: "2px solid black" }}
            >
              Strona główna
            </Link>{" "}
            &nbsp;/ {formattedCategory}
          </span>
        </div>
        <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-4 pb-5">
          {filteredItems.map((item) => (
            <Col key={item.id} className="">
              <StoreItem {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
