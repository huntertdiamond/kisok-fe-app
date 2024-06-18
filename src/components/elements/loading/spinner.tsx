import "@/styling/spinnerStyles.css";

const bars = Array(12).fill(0);

export function Spinner({ color, size = 20 }: { color: string; size: number }) {
  return (
    <div
      className="spinnerWrapper"
      style={
        {
          "--spinner-size": `${size}px`,
          "--spinner-color": color,
        } as React.CSSProperties
      }
    >
      <div className="spinner">
        {bars.map((_, i) => (
          <div className="bar" key={`spinner-bar-${i}`} />
        ))}
      </div>
    </div>
  );
}
