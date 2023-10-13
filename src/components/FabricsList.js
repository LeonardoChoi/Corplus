import React from "react";
import { useState, useEffect } from "react";
import { db, auth } from "../config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

function FabricsList() {
  const [fabricList, setFabricList] = useState([]);

  // state for adding new fabrics to firestore
  const [newEstampa, setNewEstampa] = useState("");
  const [newTecido, setNewTecido] = useState("");
  const [updatedName, setUpdatedName] = useState("");

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
  }, [fabricsCollectionRef]);

  const onSubmit = async () => {
    try {
      await addDoc(fabricsCollectionRef, {
        estampa: newEstampa,
        tecido: newTecido,
        userId: auth?.currentUser?.uid,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const onDelete = async (id) => {
    const fabricDoc = doc(db, "fabrics", id);
    await deleteDoc(fabricDoc);
  };

  const updateFabricName = async (id) => {
    const fabricDoc = doc(db, "fabrics", id);
    await updateDoc(fabricDoc, { title: updatedName });
  };

  return (
    <div>
      <div className="flex w-60 flex-col">
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
        <button onClick={onSubmit}>Submit</button>
      </div>
      {fabricList.map((fabric) => (
        <div key={fabric.id}>
          <h1>Estampa:{fabric.estampa}</h1>
          <h2>Tecido:{fabric.tecido}</h2>
          <button onClick={() => onDelete(fabric.id)}>Delete</button>
          <input
            placeholder="Nova estampa..."
            onChange={(e) => setUpdatedName(e.target.value)}
          ></input>
          <button onClick={() => updateFabricName(fabric.id)}>
            Mudar Estampa
          </button>
        </div>
      ))}
    </div>
  );
}

export default FabricsList;
