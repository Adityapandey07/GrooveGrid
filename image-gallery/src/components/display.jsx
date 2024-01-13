import React, { useState, useEffect } from 'react';
import styles from './display.module.css';

const Display = () => {
  const imagePaths = [];

  // Generating image paths using a loop
  for (let i = 1; i <= 21; i++) {
    imagePaths.push(`/Music/Music${i}.jpg`);
  }

  const [audio, setAudio] = useState(new Audio()); 

  const handleClick = (imagePath, audioPath) => {
    console.log('Clicked image path:', imagePath);
    playMusic(audioPath);
  };

  const playMusic = (audioPath) => {
    audio.src = audioPath;
    audio.play();
  };

  useEffect(() => {
    // Clean up the audio object when the component unmounts
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  return (
    <div className="container text-center">
      <div className="row">
        {imagePaths.map((imagePath, index) => (
          <div className="col" key={index}>
            {/* Assuming audio files are named Music1.mp3, Music2.mp3, etc. */}
            <button
              className={`${styles.apbutton} glow-on-hover`}
              onClick={() => handleClick(imagePath, `/Music/Music${index + 1}.mp3`)}
            >
              <img className={styles.apimg} src={imagePath} alt={`Image ${index}`} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Display;
