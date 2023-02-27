import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { useState } from 'react';
import Navhome from './components/Navhome/Navhome';
import Encabezado from './components/Encabezado/Encabezado';
import Cards from './components/Cards/Cards';
import Reserva from './components/Reserva/Reserva';
//import ListaReserva from './components/Reserva/ListaReserva';
import Footer from './components/Footer/Footer';

function App() {

//   const [contacts, updateContacts] = useState([]);

//   const addContact = (contactInfo) => {
//     updateContacts([...contacts, contactInfo]);
//   };

  return (
    <>
    <Navhome />
    <Encabezado />
    <Cards />
    <Reserva />
    <Footer />
    </>
  );
  }

export default App;
