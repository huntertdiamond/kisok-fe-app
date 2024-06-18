const placeholderChartData = () => {
  const topLine = 8000;
  const bottomLine = 200;
  const variation = (topLine - bottomLine) / 2;

  return Array.from({ length: 7 }, (_, index) => ({
    name: `Page ${String.fromCharCode(65 + index)}`,
    uv: Math.floor(bottomLine + Math.random() * variation),
    pv: Math.floor(bottomLine + Math.random() * variation),
    amt: Math.floor(bottomLine + Math.random() * variation),
  }));
};

export { placeholderChartData };
