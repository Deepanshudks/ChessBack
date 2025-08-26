import "../index.css";

const ChessKnightLoader = ({ size = "md", color = "gray" }) => {
  const sizeStyles = {
    sm: "w-10 h-10",
    md: "w-14 h-14",
    lg: "w-18 h-18",
  };

  const colorStyles = {
    gray: "text-gray-700",
    blue: "text-blue-600",
    green: "text-green-600",
    purple: "text-purple-600",
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div
        className={`animate-knight-tilt ${sizeStyles[size]} ${colorStyles[color]}`}
      >
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 6c0-1.1-.9-2-2-2h-1.5l-1.4-2.3C16.8 1.3 16.3 1 15.7 1H8.3c-.6 0-1.1.3-1.4.7L5.5 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-9.5 10.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5zm6 0c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5z" />
        </svg>
      </div>
      <p className="text-sm font-medium text-gray-600">
        Waiting for opponent to join...
      </p>
    </div>
  );
};

export default ChessKnightLoader;

export const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 bg-gray-100">
      <ChessKnightLoader size="sm" color="gray" />
      <ChessKnightLoader size="md" color="blue" />
      <ChessKnightLoader size="lg" color="purple" />
    </div>
  );
};
