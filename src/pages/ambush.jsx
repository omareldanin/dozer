import React, { useRef, useState } from 'react'; 
import './home.css';
import TabsSection from './Tabs';

function Ambush () {

  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlayback = () => {
    const videos = document.querySelectorAll('video');
    const newState = !isPlaying;

    videos.forEach((video) => {
      if (newState) {
        video.play();
      } else {
        video.pause();
      }
    });

    setIsPlaying(newState);
  };


  return (
    <div className="container">
    {/* Camera Section */} 
    <div className="video-container">
      <VideoPlayer url="https://drive.google.com/uc?export=download&id=11KpFMNgVpzztEvK8DfQBW5629ty0_cmt" />
      <VideoPlayer url="https://drive.google.com/uc?export=download&id=1x9afw86MD7g5WxDDtjmGJoL-hTbvnOGT" />
    </div>
    <button onClick={handleTogglePlayback} id="videosStartButton">{isPlaying ? 'Stop' : 'Start'}</button>
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

