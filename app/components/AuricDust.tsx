export function AuricDust() {
  return (
    <div className="auric-dust">
      {[1,2,3,4,5,6].map((i) => (
        <span
          key={i}
          style={{
            left: `${Math.random()*100}%`,
            top: `${Math.random()*100}%`,
            animationDelay: `${i * 3}s`,
          }}
        />
      ))}
    </div>
  );
}