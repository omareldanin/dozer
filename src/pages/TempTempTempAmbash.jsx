
import React from 'react'; 
import './home.css';
import TabsSection from './Tabs';
import axios from 'axios';
const baseURL = "http://154.237.115.82:8080";

function Ambush () {

  const [post, setPost] = React.useState(null);
  const [post2, setPost2] = React.useState(null);

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

function apitrial(filename = "pers.mp4", second =2000)
{
  axios.put(`${baseURL}`, {
    "filename" : filename,
    "second" : second,
    "mode" : 1
  })
  .then((response) => {
    setPost(response.data);
  });
}


function apitrial2(filename = "cars.mp4", second =2000)
{
  axios.put(`${baseURL}`, {
    "filename" : filename,
    "second" : second,
    "mode" : 1
  })
  .then((response) => {
    setPost2(response.data);
  });
}


console.log("##################", post,"################");
console.log("##################", post2,"################");

  return (
    <div className="container">
    {/* Camera Section */} 
      <div className="video-container">
        <div className="frame1">
          <video id="video1" controls width="500" height="500" onPlay={() => apitrial()}>
            <source src="cars.mp4" type="video/mp4"/>
          </video>
        </div>
        <div className="frame2">
          <video id="video2" controls width="250" height="150" onPlay={() => apitrial2()}>
            <source src="pers.mp4" type="video/mp4"/>
          </video>
        </div>
      </div>
    {/* Tabs Section */}
    <TabsSection />
    </div>
);
}



const VideoPlayer = ({ url }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlayback = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div>
    <video ref={videoRef} width="640" height="600" >
    <source src={url} type="video/mp4" />
    Your browser does not support the video tag.
    </video>
    {/*<button onClick={handleTogglePlayback}>{isPlaying ? 'Stop' : 'Start'}</button>*/}
    </div>
  );
};


export default Ambush;

