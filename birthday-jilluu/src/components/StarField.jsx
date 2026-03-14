const starsData = new Array(100).fill(0).map(() => ({
  top: Math.random() * 100 + "%",
  left: Math.random() * 100 + "%"
}));

export default function StarField() {
  return (
    <div className="stars">
      {starsData.map((star, i) => (
        <span
          key={i}
          className="star"
          style={{
            top: star.top,
            left: star.left
          }}
        ></span>
      ))}
    </div>
  );
}