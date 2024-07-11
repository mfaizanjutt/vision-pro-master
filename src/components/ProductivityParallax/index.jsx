import React, { useEffect, useRef, useState } from 'react';
import './ProductivityParallax.css';
import appleVision from '../../assets/videos/medium.mp4';
import PlaySvg from '../../assets/svg/PlaySvg';
import PauseSvg from '../../assets/svg/PauseSvg';

const ProductivityParallax = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const reOrder = () => {
    const mq = window.matchMedia('(min-width: 392px)');
    const rightChild = document.querySelector('.productivity-right-child');

    if (mq.matches) {
      rightChild.classList.add('productivity-custom');
      const scroll = window.scrollY;
      const topContent = document.querySelector('.productivity-one').offsetTop - 25;
      const sectionHeight = document.querySelector('.productivity-videoContent').offsetHeight;
      const rightHeight = rightChild.offsetHeight;
      const bottomContent = topContent + sectionHeight - rightHeight - 45;

      if (scroll > topContent && scroll < bottomContent) {
        rightChild.classList.remove('productivity-posAbs');
        rightChild.classList.add('productivity-posFix');
      } else if (scroll > bottomContent) {
        rightChild.classList.remove('productivity-posFix');
        rightChild.classList.add('productivity-posAbs');
      } else if (scroll < topContent) {
        rightChild.classList.remove('productivity-posFix');
      }
    } else {
      rightChild.classList.remove('productivity-custom', 'productivity-posAbs', 'productivity-posFix');
    //   rightChild.querySelector('h2').textContent = 'fixed';
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', reOrder);
    window.addEventListener('resize', reOrder);

    reOrder(); // Initial call to set the right state

    return () => {
      window.removeEventListener('scroll', reOrder);
      window.removeEventListener('resize', reOrder);
    };
  }, []);

  return (
    <div className="productivity-container">
      <div className="productivity-videoSection productivity-one clearfix">
        <video ref={videoRef} autoPlay loop muted>
          <source src={appleVision} type="video/mp4" />
        </video>

        <div className="productivity-controls" onClick={handlePlayPause}>
          {isPlaying ? <PauseSvg fill="white" /> : <PlaySvg fill="white" />}
        </div>

        <div className="productivity-videoContent">
          <div className="productivity-right-child">
            <h2>
            Productivity
            </h2>
            <h1>
            A workspace with <br /> infinite space.



            </h1>
          
          </div>
        </div>
      </div>
      <div className="productivity-bottom"></div>
    </div>
  );
};

export default ProductivityParallax;
