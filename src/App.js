import "./App.css";
import Tablazat from "./komponensek/Tablazat";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Form from "react-bootstrap/Form";
import axios from "axios";

const baseURL = "http://localhost:8000/";
const adatok = await axios.get(baseURL + "api/tema");
console.log(adatok.data);
function App() {
  return (
    <div className="App">
      <header className="App-header">Szótár</header>

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Szavak</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <article className="fluid">
        <h2 className="justify-content-left">Szavak</h2>
        <Form.Select aria-label="Default select example">
          <option>Témakörök</option>
          {adatok.data.map((item, index) => (
            <option value="1">{item.temanev}</option>
          ))}
        </Form.Select>
        <Tablazat />
      </article>
    </div>
  );
}

export default App;
