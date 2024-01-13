import React from 'react';
import './gallery.css'; 
const Gallery = () => {
  
  const imageSources = [
    'images/gallery/Band/Band1.jpg',
    'images/gallery/Band/Band2.jpg',
    'images/gallery/Band/Band3.jpg',
    'images/gallery/Band/Band5.jpg',
    'images/gallery/Band/Band6.jpg',
    'images/gallery/Band/Band7.jpg',
    'images/gallery/Band/Band8.jpg',
    'images/gallery/Band/Band9.jpg',
    'images/gallery/Gackt1.jpg',
    'images/gallery/Gackt2.jpg',
    'images/gallery/Gackt5.jpg',
    'images/gallery/Gackt7.jpg',
    'images/gallery/Gackt8.jpg',
    'images/gallery/Kami1.jpg',
    'images/gallery/Kami2.jpg',
    'images/gallery/Kami3.jpg',
    'images/gallery/Kami4.jpg',
    'images/gallery/Kami5.jpg',
    'images/gallery/Kami6.jpg',
    'images/gallery/Kami7.jpg',
    'images/gallery/Kami9.jpg',
    'images/gallery/Klaha1.jpg',
    'images/gallery/Klaha3.jpg',
    'images/gallery/Klaha4.jpg',
    'images/gallery/Klaha5.jpg',
    'images/gallery/Klaha6.jpg',
    'images/gallery/Kozi2.jpg',
    'images/gallery/Kozi3.jpg',
    'images/gallery/Kozi4.jpg',
    'images/gallery/Kozi6.jpg',
    'images/gallery/Kozi7.jpg',
    'images/gallery/Kozi8.jpg',
    'images/gallery/Kozi9.jpg',
    'images/gallery/Kozi10.jpg',
    'images/gallery/ManaSama3.jpg',
    'images/gallery/ManaSama6.jpg',
    'images/gallery/ManaSama7.jpg',
    'images/gallery/ManaSama8.jpg',
    'images/gallery/ManaSama9.jpg',
    'images/gallery/ManaSama10.jpg',
    'images/gallery/Tetsu1.jpg',
    'images/gallery/Tetsu2.jpg',
    'images/gallery/Yuki1.jpg',
    'images/gallery/Yuki2.jpg',
    'images/gallery/Yuki3.jpg',
    'images/gallery/Yuki4.jpg',
    'images/gallery/Yuki5.jpg',
    'images/gallery/Yuki7.jpg',
    'images/gallery/Yuki8.jpg',
  ];

  return (
    <div className="gallery">
      {imageSources.map((src, index) => (
        <div className="gallery-item" key={index}>
          <img src={src} alt={`${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
