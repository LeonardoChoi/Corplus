import React from "react";
import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

function FabricsList() {
  const [fabricList, setFabricList] = useState([]);

  // state for adding new fabrics to firestore
  const [newEstampa, setNewEstampa] = useState("");
  const [newTecido, setNewTecido] = useState("");

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
      <div className="flex flex-col w-60">
        <h1>Add a Fabric To Invetory</h1>
        <input
          placeholder="Estampa"
          onChange={(e) => setNewEstampa(e.target.value)}
          type="text"
        />
        <input
          placeholder="Tecido"
          onChange={(e) => setNewTecido(e.target.value)}
          className=""
          type="text"
        />
        <button>Submit</button>
      </div>
      {fabricList.map((fabric) => (
        <div key={fabric.id}>{fabric.estampa}</div>
      ))}
    </div>
  );
}

export default FabricsList;
