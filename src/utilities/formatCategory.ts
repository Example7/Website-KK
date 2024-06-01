export function formatCategory(category: string): string {
  const specialCases: { [key: string]: string } = {
    Dziecka: "Dzieci",
  };

  if (specialCases[category]) {
    return specialCases[category];
  }

  return category
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
}
