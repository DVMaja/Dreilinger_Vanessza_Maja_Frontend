import axios from "axios";

const baseURL = "http://localhost:8000/";
const adatok = await axios.get(baseURL + "api/szavak");

export default function Divvel() {
  if (!adatok) {
    <div>Töltés</div>;
  } else {
    return (
      <div
        className="container 
      d-flex align-items-center justify-content-center"
      >
        <div className="row">
          <div className="col-sm">Angol</div>
          <div className="col-sm">Magyar</div>
          <div className="col-sm">Visszajelzés</div>
        </div>
      </div>
    );
  }
}
