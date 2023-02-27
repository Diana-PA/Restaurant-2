
import React, { useState } from "react";
import {getFirestore, collection, addDoc , getDocs, doc, deleteDoc, getDoc, setDoc} from "firebase/firestore"
import db from "./firebase";

function Reserva({addContact}) {

  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    personeenumber: "",
  });

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    addContact(contactInfo);
    try{
      await addDoc(collection(db, "Reserva"),{
        ...setContactInfo
      })
    } catch (error) {
      alert ('No se ha podido reservar');
    }
    setContactInfo({ name: "", email: "", personenumber: "" });
  };

  return (
    <div className="form-container mb-3 text-center">
      <form onSubmit={handleSubmit}>
        <div>
          <br />
          <h3 className="p-2 m-2 text-center fw-bold fst-italic">Realice su reserva</h3>
        </div>
        <div className="p-3 m-3 mb-3">
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Ingrese su nombre"
            value={contactInfo.name}
            onChange={handleChange}
          />
        </div>
        <div className="p-3 m-3 mb-3">
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Ingrese su correo"
            value={contactInfo.email}
            onChange={handleChange}
          />
        </div>
        <div className="p-3 m-3 mb-3">
          <input
            className="form-control"
            type="number"
            name="personenumber"
            placeholder="Cantidad de personas"
            value={contactInfo.personenumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <button 
          className="btn btn-dark"
          onClick={handleChange}
          >Reservar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Reserva