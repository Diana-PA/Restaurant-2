
import React, { useState } from "react";
import  db  from "./firebase";



const Reserva = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [personenumber, setPersonenumber] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("Reserva")
      .add({
        name: name,
        email: email,
        personenumber: personenumber,
      })
      .then(() => {
        setLoader(false);
        alert("Tu reserva ha sido exitosa");
        console.log('Entró la informacion')
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
        console.log('Entró al catch')
      });

    setName("");
    setEmail("");
    setPersonenumber("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Realice su reserva</h1>

      <label>Nombre</label>
      <input
        placeholder="Escriba su nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Correo</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Número de personas</label>
      <input
        className="form-control"
        type="number"
        placeholder="Número de personas"
        value={personenumber}
        onChange={(e) => setPersonenumber(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Reservar
      </button>
    </form>
  );
};

export default Reserva
