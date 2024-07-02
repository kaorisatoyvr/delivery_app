import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Header from './components/header/Header';
import Delivery from './components/delivery/Delivery';
import Details from './components/details/Details';
import PickUp from './components/pickup/PickUp';
import Links from './components/links/Links';
import Status from './components/status/Status';

function App() {
 
  return (
    <>
    <Container>
      <header>
        <Status />
        <Header />
      </header>

      <main>

        <Delivery />
        <Details />
        <PickUp />
        <Links />

      </main>
      
     </Container>
    </>
  )
}

export default App
