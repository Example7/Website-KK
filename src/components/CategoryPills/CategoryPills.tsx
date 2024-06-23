import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import "./CategoryPills.css";
import { useRef, useState, useEffect } from "react";

type CategoryPillsProps = {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
};

const TRANSLATE_AMOUNT = 150;

export function CategoryPills({
  categories,
  selectedCategory,
  onSelect,
}: CategoryPillsProps) {
  const [translate, setTranslate] = useState(0);
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      setIsLeftVisible(containerRef.current.scrollLeft > 0);
      setIsRightVisible(
        containerRef.current.scrollLeft <
          containerRef.current.scrollWidth - containerRef.current.clientWidth
      );
    }
  }, [translate]);

  const handleLeftClick = () => {
    setTranslate((translate) => Math.max(0, translate - TRANSLATE_AMOUNT));
  };

  const handleRightClick = () => {
    if (containerRef.current) {
      const newTranslate = translate + TRANSLATE_AMOUNT;
      const edge = containerRef.current.scrollWidth;
      const width = containerRef.current.clientWidth;
      setTranslate(Math.min(edge - width, newTranslate));
    }
  };

  useEffect(() => {
    if (containerRef.current == null) return;

    const observer = new ResizeObserver((entries) => {
      const container = entries[0]?.target;
      if (container == null) return;

      setIsLeftVisible(translate > 0);
      setIsRightVisible(
        translate + container.clientWidth < container.scrollWidth
      );
    });

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [categories, translate]);

  return (
    <div ref={containerRef} className="overflow-x-hidden position-relative">
      <div
        className="d-flex text-nowrap gap-3"
        style={{
          width: "max-content",
          transform: `translateX(-${translate}px)`,
        }}
      >
        {categories.map((category) => (
          <Button
            className={`category-pill border-0 ${
              selectedCategory === category
                ? "bg-dark text-light active-category"
                : "bg-secondary text-light"
            }`}
            key={category}
            onClick={() => onSelect(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      {isLeftVisible && (
        <div className="pills-icon pills-icon-left">
          <Button className="h-100 w-auto p-1" onClick={handleLeftClick}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
        </div>
      )}
      {isRightVisible && (
        <div className="pills-icon pills-icon-right">
          <Button className="h-100 w-auto p-1" onClick={handleRightClick}>
            <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </div>
      )}
    </div>
  );
}
