import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Card from "../components/Card";
import fabricData from "../data/fabricData";

function HomePage() {
  return (
    <div>
      <Banner />
      <div className="container">
        {fabricData.map((fabric) => (
          <Card
            key={fabric.id}
            fabricName={fabric.fabricName}
            price={fabric.fabricPrice}
            imgSrc={fabric.fabricImg}
          >
            Hellofasdf
          </Card>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
