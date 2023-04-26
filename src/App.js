import React from "react";
import Card from "./components/Card";
import fabricData from "./data/fabricData";
import "./index.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

function App() {
  // const { id, fabricName, fabricPrice, fabricImg } = fabricData;
  return (
    <>
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
    </>
  );
}

export default App;
