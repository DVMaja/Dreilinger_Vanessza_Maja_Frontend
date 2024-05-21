import axios from "axios";

const baseURL = "http://localhost:8000/";
const adatok = await axios.get(baseURL + "api/szavak");

export default function Tablazat() {
  //console.log(adatok.data);

  
  const katt = (e) => {
    //console.log(e)
    console.log("hello");
  };

  if (!adatok) {
    <div>Töltés</div>;
  } else {
    return (
      <div className="d-flex align-items-center justify-content-center table-responsive-sm table-responsive-md">
        <table className="table ">
          <thead>
            <tr>
              <th>Angol</th>
              <th>Magyar</th>
              <th>Visszajelzés</th>
            </tr>
          </thead>
          <tbody>
            {adatok.data.map((item, index) => (
              <tr key={index}>
                <td>{item.angol}</td>
                <td>
                  <input type="text" name="valasz" />
                </td>
                <td>Rosz</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
