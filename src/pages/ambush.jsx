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
    <div className="container">
    {/* Camera Section */} 
      <div className="video-container">
        <div className="frame1">
          <video id="video1" controls width="500" height="500"></video>
        </div>
        <div className="frame2">
          <video id="video2" controls width="250" height="150"></video>
        </div>
      </div>
    {/* Tabs Section */}
    <h1>Hello world</h1>
    </div>
);
}

export default Ambush;

