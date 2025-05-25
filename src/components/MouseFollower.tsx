
interface MouseFollowerProps {
  mousePosition: { x: number; y: number };
}

const MouseFollower = ({ mousePosition }: MouseFollowerProps) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div
        className="absolute w-6 h-6 bg-primary/30 rounded-full blur-sm transition-all duration-75 ease-out"
        style={{
          left: `${mousePosition.x - 12}px`,
          top: `${mousePosition.y - 12}px`,
        }}
      />
      <div
        className="absolute w-3 h-3 bg-primary rounded-full transition-all duration-100 ease-out"
        style={{
          left: `${mousePosition.x - 6}px`,
          top: `${mousePosition.y - 6}px`,
        }}
      />
    </div>
  );
};

export default MouseFollower;
