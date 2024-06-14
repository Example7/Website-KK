import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StoreItem } from "../StoreItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { formatCategory } from "../../utilities/formatCategory";
import "./CategorySection.css";
import React from "react";
import { filterItems } from "../../utilities/filterItems";
import { Filter } from "../Filter";

type CategorySectionProps = {
  category: string;
};

export function CategorySection({ category }: CategorySectionProps) {
  const formattedCategories = formatCategory(category);

  const handleGoBack = () => {
    window.history.back();
  };
  const filteredItems = filterItems(category);

  return (
    <>
      <Container>
        <Row className="my-5 d-flex navigation-panel align-items-center justify-content-center gap-3">
          <Col
            xs={12}
            sm={2}
            lg={1}
            className="d-flex align-items-center gap-1"
            onClick={handleGoBack}
            style={{ cursor: "pointer" }}
          >
            <FontAwesomeIcon icon={faArrowLeftLong} />
            <div className="border-bottom border-dark fw-bold category-section-link">
              POWRÓT
            </div>
          </Col>
          <Col className="d-flex align-items-center justify-content-start">
            <Link
              className="text-decoration-none text-black category-section-link"
              to="/"
              style={{ borderBottom: "2px solid black" }}
            >
              Strona główna
            </Link>
            /
            {formattedCategories.map((cat, index) => (
              <React.Fragment key={index}>
                {cat.linkPath ? (
                  <Link
                    className={`text-decoration-none text-black category-section-link ${
                      index === 0 ? "first-link" : ""
                    }`}
                    to={cat.linkPath}
                    style={
                      index === 0 ? { borderBottom: "2px solid black" } : {}
                    }
                  >
                    {cat.displayText}
                  </Link>
                ) : (
                  <span className="text-black category-section-link">
                    {cat.displayText}
                  </span>
                )}
                {index !== formattedCategories.length - 1 && " / "}
              </React.Fragment>
            ))}
          </Col>
        </Row>
        <section className="w-100 d-flex align-items-center justify-content-end pb-5">
          <Filter />
        </section>
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
