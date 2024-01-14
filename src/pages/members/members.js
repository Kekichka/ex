import React, { useState } from 'react';
import './members.css';

const Members = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const membersData = [
    { id: 1, name: 'Gackt', image: '/images/Gackt10.jpg', info: 'Gackt (stage name) 大城 ガクト, Ōshiro Gakuto, born July 4, 1973 Position : Vocals' },
    { id: 2, name: 'Kami', image: '/images/Kami10.jpg', info: 'Kami (stage) 神村 右狂 , Kamimura Ukyō , born February 1, 1973 Position : Drums, Percussion' },
    { id: 3, name: 'Közi', image: '/images/Kozi1.jpg', info: 'Közi(stage name)	萩野 こうじ Hagino Kōji, born May 29, 1972 Position : Guitar, Synth Guitar, Keyboard, Percussion' },
    { id: 4, name: 'Klaha', image: '/images/Klaha2.jpg', info: 'Klaha(stage name) 春名真樹, Haruna Masaki, born 	May 3, 1975 Position : Vocals' },
    { id: 5, name: 'Mana', image: '/images/ManaSama5.jpg', info: 'Real name	: Unknown, Mana 魔名 Mana, born March 19, 1969 Position : Guitar, Synth Guitar, Keyboard, Percussion' },
    { id: 6, name: 'Yu~ki', image: '/images/Yuki6.jpg', info: 'Yu~ki 9stage name) 菊澤 祐樹 Kikusawa Yūki, born August 8 1971 Position : Bass, Contra-bass, Percussion' },
    { id: 7, name: 'Tetsu', image: '/images/Tetsu2.jpg', info: 'Tetsu(stage name) 高野哲, Takanu Tetsu, born December 12, 1972 Position : Vocals' },
  ];

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  const renderMembers = (start, end) => (
    membersData.slice(start, end).map((member) => (
      <div className="member-card" key={member.id} onClick={() => openModal(member)}>
        <img src={member.image} alt={member.name} />
        <p>{member.name}</p>
      </div>
    ))
  );

  return (
    <div className="members-container">
      <div className="mainpage-line"></div>
      <div className="mainpage-line2"></div>
      <div className="member-row">
        {renderMembers(0, 4)}
      </div>
      <div className="member-row">
        {renderMembers(4, 7)}
      </div>

      {selectedMember && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
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
