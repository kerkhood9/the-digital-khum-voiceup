import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Image from "react-bootstrap/Image";

import "./index.css";

<span><a href="../app.js"></a></span>



export default function App() {
  return (
    <div style={{ display: "block", width: 700, padding: 30 }}>
      <h4>voice talking</h4>
      <Image
        src=
        "https://image.shutterstock.com/image-vector/person-head-talking-icon-voice-260nw-1690444375.jpg"
        rounded
      />

      <label for="pwd">Password:</label>
      <input type="password" id="pwd" name="pwd" minlength="8"></input>
      
      


      <h4>empergency police sos</h4>
      <Image
        src=
        "https://icons-for-free.com/download-icon-light+police+security+icon-1320190836842033978_512.png"
        roundedCircle
      />
      <h4>hospital</h4>
      <Image
        src=
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzUJBF8ZTq9GUCoWTwhgwSFaIkgLhF_zA0AQ&usqp=CAU"
        roundedCircle
      />
      <h4>fire water</h4>
      <Image src="https://cdn-icons.flaticon.com/png/512/1840/premium/1840191.png?token=exp=1654671087~hmac=20a7169f62e78718b86b4046bdc91f79"></Image>




    </div>
  );
}