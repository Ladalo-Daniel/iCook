import React, { useState, useEffect } from 'react';

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const images = [
    '/src/assets/img/img9.jpg',
    'src/assets/img/img2.jpg',
    'src/assets/img/3.jpg',
    'src/assets/img/img5.jpg',
    'src/assets/img/5.jpg',
    'src/assets/img/1.jpg',
    'src/assets/img/img7.jpg',
    'src/assets/img/4.jpg',
    'src/assets/img/img4.jpg',
    'src/assets/img/2.jpg'
  ];

  const goToPreviousSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex -1 + images.length) % images.length)
  }


  useEffect( ()=> {
    const timer = setInterval(() => {
        setZoomed(true);
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          setZoomed(false);
        }, 1000); // Zoom in for 1 second, then switch to the next slide
      }, 3000); // Auto transition every 3 seconds
  
      return () => {
        clearInterval(timer); // Clean up the timer when the component is unmounted
      };
  }, [])


  return (
    <div className='container-slide'>
      <img
        className={`slide-image ${zoomed ? 'zoomed' : ''}`}
        src={images[currentIndex]}
        alt='Slide'
      />
    </div>
  );

//   const goToPreviousSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   useEffect(() => {
//     const timer = setInterval(goToNextSlide, 3000); // Auto slide every 3 seconds

//     return () => {
//       clearInterval(timer); // Clean up the timer when the component is unmounted
//     };
//   }, []);

//   const goToNextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   return (
//       <div className='container-slide'>
//            <img className="slide-image" src={images[currentIndex]} alt="Slide" />
//       </div>
//   );
};