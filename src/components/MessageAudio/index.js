import React, { useState, useRef, useEffect } from 'react';
import waveSvg from 'assets/img/wave.svg';
import playSvg from 'assets/img/play.svg';
import pauseSvg from 'assets/img/pause.svg';
import convertCurrentTime from 'utils/convertCurrentTime.js';

const MessageAudio = ({ audio }) => {
  const [isPlaing, setIsPlaing] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const audioElem = useRef(null);

  useEffect(() => {
    audioElem.current.addEventListener('playing', () => setIsPlaing(true), false);
    audioElem.current.addEventListener(
      'ended',
      () => {
        setIsPlaing(false);
        setProgress(0);
        setCurrentTime(0);
      },
      false,
    );
    audioElem.current.addEventListener('pause', () => setIsPlaing(false), false);
    audioElem.current.addEventListener('timeupdate', () => {
      const duration = (audioElem.current && audioElem.current.duration) || 0;
      setCurrentTime(audioElem.current.currentTime);
      setProgress((audioElem.current.currentTime / duration) * 100 + duration * 0.5);
    });
  }, []);

  const togglePlay = () => {
    if (!isPlaing) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  };

  return (
    <div className="message__audio">
      <audio ref={audioElem} src={audio} preload="auto " />
      <div className="message__audio-progress" style={{ width: progress + '%' }} />
      <div className="message__audio-info">
        <div className="message__audio-btn">
          <button onClick={togglePlay}>
            {isPlaing ? (
              <img src={pauseSvg} alt="pause svg" />
            ) : (
              <img src={playSvg} alt="play svg" />
            )}
          </button>
        </div>
        <div className="message__audio-wave">
          <img src={waveSvg} alt="wave svg" />
        </div>
        <div className="message__audio-duration">{convertCurrentTime(currentTime)}</div>
      </div>
    </div>
  );
};

export default MessageAudio;
