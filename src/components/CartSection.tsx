import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import storeItems from "../data/item.json";
import { SimplifiedStoreItem } from "./SimplifiedStoreItem/SimplifiedStoreItem";
import { CategoryPills } from "./CategoryPills/CategoryPills";
import { categories } from "../data/categories";

export function CartSection() {
  const [maxItemsToShow, setMaxItemsToShow] = useState(
    window.innerWidth >= 992 ? 12 : 6
  );
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  useEffect(() => {
    function handleResize() {
      setMaxItemsToShow(window.innerWidth >= 992 ? 12 : 6);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="bg-white pb-5">
      <Container>
        <h1 className="fw-bold py-4 text-center cart-section-header">
          Sprawdź nasze niesamowite produkty!
        </h1>
        <div className="overflow-x-hidden pb-4">
          <div className="sticky top-0 bg-white z-10">
            <CategoryPills
              categories={categories}
              selectedCategory={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>
        </div>
        <Row lg={3} md={2} sm={1} xs={1} xl={4} className="g-4">
          {storeItems
            .filter(
              (item) =>
                selectedCategory === "Wszystko" ||
                item.type.includes(selectedCategory)
            )
            .sort(
              (a, b) =>
                (b.isNewOrRecommended ? 1 : 0) - (a.isNewOrRecommended ? 1 : 0)
            )
            .slice(0, maxItemsToShow)
            .map((item) => (
              <Col key={item.id}>
                <SimplifiedStoreItem
                  name={item.name}
                  price={item.price}
                  imageUrl={item.imageUrl}
                  isNewOrRecommended={item.isNewOrRecommended}
                  category={item.category}
                />
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
}
