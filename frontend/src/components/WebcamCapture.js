import React, { useRef, useEffect } from 'react';
import * as faceapi from 'face-api.js';

function WebcamCapture({ onCapture }) {
  const videoRef = useRef();

  useEffect(() => {
    const startVideo = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
      await faceapi.nets.faceRecognitionNet.loadFromUri('/models');
      await faceapi.nets.faceLandmark68Net.loadFromUri('/models');

      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => { videoRef.current.srcObject = stream; })
        .catch(err => console.error(err));
    };
    startVideo();
  }, []);

  const handleCapture = async () => {
    const detection = await faceapi.detectSingleFace(videoRef.current).withFaceLandmarks().withFaceDescriptor();
    if (detection) onCapture(detection.descriptor);
  };

  return (
    <div>
      <video ref={videoRef} autoPlay width="320" height="240" />
      <button onClick={handleCapture}>Capture Face</button>
    </div>
  );
}

export default WebcamCapture;
