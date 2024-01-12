import React, { useState } from 'react';
import './members.css';

const Members = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const membersData = [
    { id: 1, name: 'Gackt', image: '/images/Gackt10.jpg', info: 'Info about Gackt' },
    { id: 2, name: 'Kami', image: '/images/Kami10.jpg', info: 'Info about Kami' },
    { id: 3, name: 'Kozi', image: '/images/Kozi1.jpg', info: 'Info about Kozi' },
    { id: 4, name: 'Klaha', image: '/images/Klaha2.jpg', info: 'Info about Klaha' },
    { id: 5, name: 'Mana', image: '/images/ManaSama5.jpg', info: 'Info about Mana' },
    { id: 6, name: 'Yuki', image: '/images/Yuki6.jpg', info: 'Info about Yuki' },
    { id: 7, name: 'Tetsu', image: '/images/Tetsu2.jpg', info: 'Info about Tetsu' },
  ];

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  const renderMembers = (start, end) => {
    return membersData.slice(start, end).map((member) => (
      <div className="member-card" key={member.id} onClick={() => openModal(member)}>
        <img src={member.image} alt={member.name} />
        <p>{member.name}</p>
      </div>
    ));
  };

  return (
    <div className="members-container">
      <div className="member-row">
        {renderMembers(0, 4)}
      </div>
      <div className="member-row">
        {renderMembers(4, 7)}
      </div>

      {selectedMember && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img src={selectedMember.image} alt={selectedMember.name} className="modal-image" />
            <div className="member-info">
              <h2>{selectedMember.name}</h2>
              <p>{selectedMember.info}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Members;
