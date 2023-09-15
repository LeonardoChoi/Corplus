import Navbar from "../components/Navbar";
import Card from "../components/Card";
import fabricData from "../data/fabricData";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

function HomePage() {
  const containerStyle = {
    height: "360px",
    width: " 900px",
    margin: "10px auto",
  };
  return (
    <div>
      <div style={containerStyle}>
        <Banner />
      </div>
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
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
