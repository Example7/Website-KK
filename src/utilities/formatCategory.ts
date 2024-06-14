export function formatCategory(
  category: string
): { displayText: string; linkPath?: string }[] {
  const segments = category.split("-");
  const formattedSegments = segments.map((segment, index) => {
    const segmentPath = segments
      .slice(0, index + 1)
      .join("-")
      .toLowerCase();
    const linkPath =
      index === segments.length - 1 ? undefined : `/${segmentPath}`;
    const displayText = segment
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());
    return { displayText, linkPath };
  });

  return formattedSegments;
}
