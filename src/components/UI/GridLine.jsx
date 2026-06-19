export default function GridLine({ orientation = "x", className = "" }) {
  const axis = orientation === "y" ? "grid-draw-y h-full w-px" : "grid-draw-x h-px w-full";

  return <span aria-hidden="true" className={`block bg-line ${axis} ${className}`} />;
}
