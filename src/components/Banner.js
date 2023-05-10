import React, { useState } from "react";

function Banner() {
  const [ad, setAd] = useState("");
  return <div>{ad}</div>;
}

export default Banner;
