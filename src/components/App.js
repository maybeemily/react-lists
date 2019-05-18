import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PhotoAlbum from './photos/PhotoAlbum';
import alpaca1 from '../assets/Alpaca-1.jpg';
import alpaca2 from '../assets/Alpaca-2.jpg';
import alpaca3 from '../assets/Alpaca-3.jpg';
import alpaca4 from '../assets/Alpaca-4.jpg';
import alpaca5 from '../assets/Alpaca-5.jpg';
import alpaca6 from '../assets/Alpaca-6.jpg';
import alpaca7 from '../assets/Alpaca-7.jpg';

export default function App() {
  const photoArray = [
    alpaca1,
    alpaca2,
    alpaca3,
    alpaca4,
    alpaca5,
    alpaca6,
    alpaca7
  ];

  return (
    <>
    <Header/>
    <PhotoAlbum title="Alpacas!" photos={photoArray}/>
    <Footer/>
    </>
  );
}
