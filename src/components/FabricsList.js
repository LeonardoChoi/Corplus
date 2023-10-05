import React from "react";
import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

function FabricsList() {
  const [fabricList, setFabricList] = useState([]);
  const fabricsCollectionRef = collection(db, "fabrics");

  useEffect(() => {
    const getFabricList = async () => {
      try {
        const data = await getDocs(fabricsCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setFabricList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getFabricList();
  }, []);

  return (
    <div>
      {fabricList.map((fabric) => (
        <div key={fabric.id}>{fabric.estampa}</div>
      ))}
    </div>
  );
}

export default FabricsList;
