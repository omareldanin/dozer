import React from 'react'; 
import './home.css';

function Ambush () {
  function startCamera() {
    // Check if the browser supports getUserMedia
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Get access to the user's camera
        navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            // Set the stream as the source for both video elements
            document.getElementById("video1").srcObject = stream;
            document.getElementById("video2").srcObject = stream;
        })
        .catch(function (error) {
            console.log("Error accessing camera:", error);
        });
        } else {
        console.log("getUserMedia is not supported");
        }
        }
  return (
  <body>
    <div className="container">
      <div className="video-container">
        <div className="frame1">
          <video id="video1" controls width="500" height="500"></video>
          <br>
          </br>
          <form className="FORM1">
          <div className="pepole"> For People </div>

            <div className="criminalcase">
              <label className="criminallabel"> Criminal Case :</label>
              <input className="checkbox" type="checkbox"/>
            </div>
            <div className="namediv">
              <label className="name">Name :</label>
              <input  className="nameinput" type="text"/>
              <br></br>
              <div className='agecontainar'>
                <label className="age">Age :</label>
                <input  className="ageinput" type="text"/>
                <br></br>
              </div>
              <div className='cardcriminalcasecontainar'>
                <label className="card criminal case"> Card Criminal Case :</label>
                <input  className="cardcriminalcaseinput" type="date"/>
                <br></br>
                <br></br>
                <br></br>
              </div>
            </div>
          </form>
        </div>
        <div className="frame2">
          <video id="video2" controls width="250" height="150"></video>
          <br></br>
          <form className="FORM1">
          <div className="car">    For Car </div>

            <div className="criminalcase">
              <label className="criminallabel"> Criminal Case :</label>
              <input className="checkbox" type="checkbox"/>
              <div className="namediv1">
                <label className="cardcriminalcar"> license Expiry Date :</label>
                <input  className="cardcriminalcaseinput" type="date"/>
                <br></br>
              </div>
            </div>
          </form>
        </div>
      </div>
      <button className="start-button" onClick={startCamera}>Start Camera</button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  </body>
);
}

export default Ambush;

