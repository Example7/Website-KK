import { Button, Card, Row } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

export function StoreItem({ id, name, price, imageUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <div>
      <Card className="h-100 border-0 shadow-lg">
        <Card.Img
          variant="top"
          src={imageUrl}
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <Row>
              <div className="fs-2 ">{name}</div>
              <div className="text-muted">{formatCurrency(price)}</div>
            </Row>
          </Card.Title>
          <div className="mt-auto">
            {quantity === 0 ? (
              <Button
                className="w-100"
                onClick={() => increaseCartQuantity(id)}
              >
                + Dodaj do Koszyka
              </Button>
            ) : (
              <div
                className="d-flex align-items-center flex-column"
                style={{ gap: ".5rem" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ gap: ".5rem" }}
                >
                  <Button
                    className="px-1 py-0"
                    onClick={() => decreaseCartQuantity(id)}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </Button>
                  <div>
                    <span className="fs-3">{quantity + " "}</span>w koszyku
                  </div>
                  <Button
                    className="px-1 py-0"
                    onClick={() => increaseCartQuantity(id)}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </Button>
                </div>
                <Button
                  className="w-100"
                  variant="danger"
                  size="sm"
                  onClick={() => removeFromCart(id)}
                >
                  Usuń
                </Button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
