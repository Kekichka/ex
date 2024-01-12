import React from 'react';
import './gallery.css'; 

const Gallery = ({ membersData }) => {
  return (
    <div className="gallery-container">
      {membersData.map((member) => (
        <div className="gallery-item" key={member.id}>
          <img src={member.image} alt={member.name} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;