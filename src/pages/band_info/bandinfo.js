import React from 'react';
import './bandinfo.css';

const BandInfo = () => {
  const topics = ['About', 'Members', 'Albums', 'Eras'];

  const scrollToTopic = (topic) => {
    const element = document.getElementById(topic.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const bandInfo = {
    about: 'This is a great band with an amazing history.',
    members: ['Gackt', 'Kami', 'Kozi', 'Klaha', 'Mana', 'Yuki', 'Tetsu'],
    albums: ['Memoire (1994)', 'Voyage Sans Retour (1996)', 'Merveilles (1998)', 'Bara no Seidou (2000)'],
    eras: ['Tetsu Era', 'Gackt Era', 'Klaha Era'],
  };

  return (
    <div className="band-info-container">
      <div className="sidebar">
        <h2>Content</h2>
        <ul>
          {topics.map((topic) => (
            <li key={topic} onClick={() => scrollToTopic(topic)}>
              {topic}
            </li>
          ))}
        </ul>
      </div>
      <div className="band-content">
        <section id="about">
          <h1>About the Band</h1>
          <p>{bandInfo.about}</p>
        </section>
        <section id="members">
          <h1>Band Members</h1>
          <ul>
            {bandInfo.members.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        </section>
        <section id="albums">
          <h1>Albums</h1>
          <ul>
            {bandInfo.albums.map((album, index) => (
              <li key={index}>{album}</li>
            ))}
          </ul>
        </section>
        <section id="eras">
          <h1>Eras</h1>
          <ul>
            {bandInfo.eras.map((era, index) => (
              <li key={index}>{era}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default BandInfo;

