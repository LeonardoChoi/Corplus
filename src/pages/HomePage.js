import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Card from "../components/Card";
import fabricData from "../data/fabricData";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="container">
        {fabricData.map((fabric) => (
          <Card
            key={fabric.id}
            fabricName={fabric.fabricName}
            price={fabric.fabricPrice}
            imgSrc={fabric.fabricImg}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
