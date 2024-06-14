import storeItems from "../data/item.json";

export function filterItems(category: string) {
  const [mainCategory, subCategory] = category.split("-");
  if (
    (mainCategory === "Dzieci" ||
      mainCategory === "Kobiety" ||
      mainCategory === "Mężczyźni") &&
    subCategory
  ) {
    if (subCategory === "Buty") {
      return storeItems.filter(
        (item) => item.category === mainCategory && item.type.includes("Obuwie")
      );
    }
    if (subCategory === "Odzież") {
      return storeItems.filter(
        (item) =>
          item.category === mainCategory &&
          (item.type.includes("Odzież") ||
            item.type.includes("Odzież Sportowa"))
      );
    }
    if (subCategory === "Outlet") {
      return storeItems.filter(
        (item) => item.category === mainCategory && item.type.includes("Outlet")
      );
    }
    if (subCategory === "Akcesoria") {
      return storeItems.filter(
        (item) =>
          item.category === mainCategory && item.type.includes("Akcesoria")
      );
    }
    if (subCategory === "NoweIPolecane") {
      return storeItems.filter(
        (item) => item.category === mainCategory && item.isNewOrRecommended
      );
    }
    return [];
  }

  if (category.startsWith("Outlet")) {
    if (category === "Outlet-Buty") {
      return storeItems.filter(
        (item) => item.type.includes("Obuwie") && item.type.includes("Outlet")
      );
    }
    if (category === "Outlet-Odzież") {
      return storeItems.filter(
        (item) =>
          (item.type.includes("Odzież") ||
            item.type.includes("Odzież Sportowa")) &&
          item.type.includes("Outlet")
      );
    }
    if (category === "Outlet-Akcesoria") {
      return storeItems.filter(
        (item) =>
          item.type.includes("Akcesoria") && item.type.includes("Outlet")
      );
    }
    return [];
  }

  return storeItems.filter((item) => item.category === category);
}
