import { Card } from "react-bootstrap";
import { formatCurrency } from "../../utilities/formatCurrency";
import { Link } from "react-router-dom";
import "./SimplifiedStoreItem.css";

type SimplifiedStoreItemProps = {
  name: string;
  price: number;
  imageUrl: string;
  isNewOrRecommended: boolean;
  category: string;
};

export function SimplifiedStoreItem({
  name,
  price,
  imageUrl,
  isNewOrRecommended,
  category,
}: SimplifiedStoreItemProps) {
  const categoryUrl = category.toLowerCase();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Link
      to={`/${categoryUrl}`}
      className="text-decoration-none"
      onClick={scrollToTop}
    >
      <Card className="h-100 rounded border-0 shadow-lg cursor-pointer">
        <Card.Img variant="top" src={imageUrl} style={{ objectFit: "cover" }} />
        {isNewOrRecommended && (
          <div className="position-absolute top-0 start-0 bg-primary text-white px-2 py-1 fs-6">
            Nowość
          </div>
        )}
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-0">
            <span className="fs-4 store-card-item">{name}</span>

            <span className="ms-2 text-muted">{formatCurrency(price)}</span>
          </Card.Title>
          <div className="bg-white text-dark p-0">{category}</div>
        </Card.Body>
      </Card>
    </Link>
  );
}
