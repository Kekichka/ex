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
    about: ['Malice Mizer (stylized as MALICE MIZER) was a Japanese visual kei rock band active from 1992 to 2001. The band was as famous for their music as they were for their live shows, featuring lavish historical costumes and stage sets, short silent theater pieces preluding various songs.', 'Formed by guitarists Mana and Közi, throughout their history, the band has gone through several different lineups and three drastic image changes. Their earlier music and themes were characterized by their strong French and classical influences, later moving away from deliberate French romanticism and incorporating Gothic aspects after several difficulties befell the band.', 'At their peak with singer Gackt, they were considered one of "the big four of visual kei" alongside Lacryma Christi, Fanatic Crisis and Shazna. Their third and most successful studio album Merveilles (1998) was included in 2021 by Kerrang! on a list of 13 essential Japanese rock and metal albums.[3] However, their success was short-lived, and in late 2001 was announced that Malice Mizer would go on an indefinite hiatus. Mana, Közi and bassist Yu~ki have performed together several times since 2010.'],
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
          {bandInfo.about.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
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

