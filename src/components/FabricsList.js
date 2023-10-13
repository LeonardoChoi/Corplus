import React from "react";
import { useState, useEffect } from "react";
import { db, auth, storage } from "../config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { ref, uploadBytes} from "firebase/storage";

function FabricsList() {
  const [fabricList, setFabricList] = useState([]);

  // state for adding new fabrics to firestore
  const [newEstampa, setNewEstampa] = useState("");
  const [newTecido, setNewTecido] = useState("");

  // Update name
  const [updatedName, setUpdatedName] = useState("");

  // File upload state
  const [fileUpload, setFileUpload] = useState(null);

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

  const uploadFile = async () => {
    if (!fileUpload) return;
    const fileFolderRef = ref(storage, `projectFiles/${fileUpload.name}`);
    uploadBytes(fileFolderRef, fileUpload);
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

          <div>
            <input
              type="file"
              placeholder="File Upload..."
              onChange={(e) => setFileUpload(e.target.files[0])}
            />
            <button onClick={uploadFile}>Upload File</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FabricsList;
