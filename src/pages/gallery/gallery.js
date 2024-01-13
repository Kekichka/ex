import React, { useState } from 'react';
import Modal from 'react-modal';
import './gallery.css';

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const navigate = (direction) => {
    const newIndex =
      direction === 'next'
        ? (selectedImageIndex + 1) % imageSources.length
        : (selectedImageIndex - 1 + imageSources.length) % imageSources.length;

    setSelectedImageIndex(newIndex);
  };

  const imageSources = [
    'images/gallery/Band/Band1.jpg',
    'images/gallery/Band/Band2.jpg',
    'images/gallery/Band/Band3.jpg',
    'images/gallery/Band/Band5.jpg',
    'images/gallery/Band/Band6.jpg',
    'images/gallery/Band/Band7.jpg',
    'images/gallery/Band/Band8.jpg',
    'images/gallery/Band/Band9.jpg',
    'images/gallery/Gackt/Gackt1.jpg',
    'images/gallery/Gackt/Gackt2.jpg',
    'images/gallery/Gackt/Gackt5.jpg',
    'images/gallery/Gackt/Gackt7.jpg',
    'images/gallery/Gackt/Gackt8.jpg',
    'images/gallery/Kami/Kami1.jpg',
    'images/gallery/Kami/Kami2.jpg',
    'images/gallery/Kami/Kami3.jpg',
    'images/gallery/Kami/Kami4.jpg',
    'images/gallery/Kami/Kami5.jpg',
    'images/gallery/Kami/Kami6.jpg',
    'images/gallery/Kami/Kami7.jpg',
    'images/gallery/Kami/Kami9.jpg',
    'images/gallery/Klaha/Klaha1.jpg',
    'images/gallery/Klaha/Klaha3.jpg',
    'images/gallery/Klaha/Klaha4.jpg',
    'images/gallery/Klaha/Klaha5.jpg',
    'images/gallery/Klaha/Klaha6.jpg',
    'images/gallery/Kozi/Kozi2.jpg',
    'images/gallery/Kozi/Kozi3.jpg',
    'images/gallery/Kozi/Kozi4.jpg',
    'images/gallery/Kozi/Kozi6.jpg',
    'images/gallery/Kozi/Kozi7.jpg',
    'images/gallery/Kozi/Kozi8.jpg',
    'images/gallery/Kozi/Kozi9.jpg',
    'images/gallery/Kozi/Kozi10.jpg',
    'images/gallery/Manasama/ManaSama3.jpg',
    'images/gallery/Manasama/ManaSama6.jpg',
    'images/gallery/Manasama/ManaSama7.jpg',
    'images/gallery/Manasama/ManaSama8.jpg',
    'images/gallery/Manasama/ManaSama9.jpg',
    'images/gallery/Manasama/ManaSama10.jpg',
    'images/gallery/Tetsu/Tetsu1.jpg',
    'images/gallery/Tetsu/Tetsu2.jpg',
    'images/gallery/Yuki/Yuki1.jpg',
    'images/gallery/Yuki/Yuki2.jpg',
    'images/gallery/Yuki/Yuki3.jpg',
    'images/gallery/Yuki/Yuki4.jpg',
    'images/gallery/Yuki/Yuki7.jpg',
    'images/gallery/Yuki/Yuki8.jpg',
  ];

  return (
    <div className="gallery">
      {imageSources.map((src, index) => (
        <div className="gallery-item" key={index} onClick={() => openModal(index)}>
          <img src={src} alt={`${index + 1}`} />
        </div>
      ))}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal-content">
          <button className="arrow-button arrow-button-prev" onClick={() => navigate('prev')}>
            &lt; Prev
          </button>
          <img src={imageSources[selectedImageIndex]} alt={`${selectedImageIndex + 1}`} />
          <button className="arrow-button arrow-button-next" onClick={() => navigate('next')}>
            Next &gt;
          </button>
          <button className="close" onClick={closeModal}>X</button>
        </div>
      </Modal>
    </div>
  );
};

export default Gallery;
