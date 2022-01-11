import "./App.css";
import Button from "@mui/material/Button";
import Form1 from "./form1.js";
import Form2 from "./form2";
import Form3 from "./form3.js";
import { useState } from "react";
import logo from "../img/mib-logo.svg";

function App() {
  //methods used to close form boxs
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonPopup2, setButtonPopup2] = useState(false);
  const [buttonPopup3, setButtonPopup3] = useState(false);

  return (
    <>
      <nav className="Navbar">
        <a href="https://www.myinsurancebroker.com/">
          <img alt="MIB" src={logo} />
        </a>
      </nav>
      <div className="Container">
        <ul className="list">
          <Button
            //method opens Consent to office form model

            onClick={() => setButtonPopup(true)}
            sx={{}}
            size="medium"
            variant="contained"
          >
            Consent to office
          </Button>
          <Button
            //method opens Vehicle Transfer form form model

            onClick={() => setButtonPopup2(true)}
            sx={{}}
            size="medium"
            variant="contained"
          >
            Vehicle Transfer Form
          </Button>
          <Button
            //method opens NVIS form model

            onClick={() => setButtonPopup3(true)}
            sx={{}}
            size="medium"
            variant="contained"
          >
            NVIS Form
          </Button>
        </ul>
        <Button color="success" sx={{}} size="medium" variant="contained">
          Submit
        </Button>

        <Form1 setTrigger={setButtonPopup} trigger={buttonPopup}>
          <h3>My Popup11</h3>
        </Form1>
        <Form2 setTrigger={setButtonPopup2} trigger={buttonPopup2}></Form2>
        <Form3 setTrigger={setButtonPopup3} trigger={buttonPopup3} />
      </div>
    </>
  );
}

export default App;
