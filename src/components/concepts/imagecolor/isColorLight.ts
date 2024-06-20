const isColorLight = (color: string): boolean => {
  const rgb = parseInt(color.slice(1), 16); // Convert hex to rgb
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;
  // Calculate relative luminance
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  return luminance > 150; // Light color threshold
};

export { isColorLight };
