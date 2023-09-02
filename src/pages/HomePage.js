import Navbar from "../components/Navbar";
import Card from "../components/Card";
import fabricData from "../data/fabricData";

function HomePage() {
  return (
    <div>
      <div className="container">
        {fabricData.map((fabric) => (
          <Card
            id={fabric.id}
            key={fabric.id}
            fabricName={fabric.fabricName}
            price={fabric.fabricPrice}
            imgSrc={fabric.fabricImg}
          ></Card>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
