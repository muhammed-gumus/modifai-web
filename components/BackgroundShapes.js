export default function BackgroundShapes() {
  const stars = Array.from({ length: 100 }, (_, i) => (
    <div key={i} className="star" style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}></div>
  ));

  return (
    <div className="background-shapes h-full w-full fixed top-0 left-0 z-0">
      {stars}
      {/* <div className="gas-cloud gas-cloud-1"></div>
      <div className="gas-cloud gas-cloud-2"></div>
      <div className="gas-cloud gas-cloud-3"></div> */}
    </div>
  );
}
