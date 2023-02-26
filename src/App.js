import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navhome from './components/Navhome/Navhome';
import Encabezado from './components/Encabezado/Encabezado';
import Cards from './components/Cards/Cards';
import Reserva from './components/Reserva/Reserva';
import Footer from './components/Footer/Footer';

function App() {
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
